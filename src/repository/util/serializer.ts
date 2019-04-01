import * as N3 from 'n3';
import {Message} from '../../model/message';
import {Contact} from '../../model/contact';
import {Notification} from '../../model/notification';

const {namedNode, literal, defaultGraph, quad} = N3.DataFactory;

export class Serializer {

  static serializeMessages = (messages: Message[]): string => {
    const json = JSON.stringify(messages);
    return json;
  };

  static serializeNotification = (notification: Notification): string => {
    const json = JSON.stringify(notification);
    return json;
  };

  static deserializeNotification = (data: string): Notification => {
    let notificaction = null;
    if (data != null && data.trim() !== '') {
      const objJSON = JSON.parse(data);
      const chatIdentificator = objJSON['_chatIdentificator'];

      const from = new Contact(objJSON['_message']['_from']['_urlPod'], objJSON['_message']['_from']['_nickname']);
      const to = new Contact(objJSON['_message']['_to']['_urlPod'], objJSON['_message']['_to']['_nickname']);
      const text = objJSON['_message']['_text'];
      const date = new Date(objJSON['_message']['_date']);
      const messg = new Message(from, to, date, text);

      notificaction = new Notification(chatIdentificator, messg);
      return notificaction;
    }
    return notificaction;
  }

  static deserializeMessages = (data: string): Message[] => {
    const messages = [];
    if (data == null || data.length === 0) {
      return messages;
    }
    const objJSON = JSON.parse(data);
    for (let i = 0; i < objJSON.length; ++i) {
      const from = new Contact(objJSON[i]['_from']['_urlPod'], null);
      const to = new Contact(objJSON[i]['_to']['_urlPod'], null);
      const messg = new Message(from, to, new Date(objJSON[i]['_date']), objJSON[i]['_text']);
      messages.push(messg);
    }
    return messages;
  };


  static serializeContact = async (newContact: Contact, oldData: string) => {
    const writer = new N3.Writer();
    let i = 0;
    const parsePromisePrefixes = new Promise((resolve, reject) => {
      const parser = new N3.Parser();
      parser.parse(
        oldData,
        (error, quadC, prefixes) => {
          if (error) {
            reject(error);
          }
          if (prefixes) {
            for (const prefix in prefixes) { //Check if the existing prefixes end with # or /
              const size = prefixes[prefix].length;
              const finalLetter = prefixes[prefix].substring(size - 1, size);
              if (finalLetter !== '#' && finalLetter !== '/') {
                prefixes[prefix] = prefixes[prefix] + '/'; //Add a /
              }
            }
            writer.addPrefixes(prefixes, null);
            writer.addPrefix(newContact.urlPod.split('/')[2].replace(/\./gi, ''), newContact.urlPod + '/', null);
            resolve('Finish');
          }
        });
    });

    const parsePromiseQuads = new Promise((resolve, reject) => {
      const parser = new N3.Parser();
      parser.parse(
        oldData,
        (error, quadC, prefixes) => {
          if (quadC) {
            writer.addQuad(quadC);
          } else {
            writer.addQuad(namedNode(':me'), namedNode('n0:knows'), namedNode(newContact.urlPod.split('/')[2].replace(/\./gi, '') + ':me'));
            if (newContact.nickname != null && newContact.nickname.trim() !== '') {
              writer.addQuad(namedNode(newContact.urlPod.split('/')[2].replace(/\./gi, '') + ':me'),
                namedNode('n0:nick'), literal(newContact.nickname));
            }
            resolve('Finish');
          }
        });
    });
    let resultTurtle = '';
    parsePromisePrefixes.then(res => {
      parsePromiseQuads.then(res2 => {
        writer.end((error, result) => {
          i = 100;
          resultTurtle = result.toString().replace(/undefined/gi, '').replace(/null/gi, '');
        });
      });
    }, err => {
      i = 100;
    });

    while (i === 0) {
      const e = await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return resultTurtle;
  };

  static deserializeContacts = async (data: string) => {
    const parser = new N3.Parser();
    const contactUrlQuads = [];
    const nickNameQuads = [];
    let i = 0;
    parser.parse(
      data,
      (error, quadC, prefixes) => {
        if (quadC) {
          Serializer.classifyQuads(quadC, contactUrlQuads, nickNameQuads);
          ++i;
        } else {
          i = 1;
        }
      });
    while (i === 0) {
      const e = await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return Serializer.rebuildContacts(contactUrlQuads, nickNameQuads);
  };

  private static classifyQuads(quadC, contactUrlQuads, nickNameQuads) {
    if (quadC.predicate.value === 'http://xmlns.com/foaf/0.1/nick') {
      nickNameQuads.push(quadC);
    }
    if (quadC.predicate.value === 'http://xmlns.com/foaf/0.1/knows') {
      contactUrlQuads.push(quadC);
    }
  }

  private static rebuildContacts(contactUrlQuads, nickNameQuads) {
    const contacts = [];
    contactUrlQuads.forEach(contactUrlQuad => {
      let nickControl = false;
      nickNameQuads.forEach(nickNameQuad => {
        if (nickNameQuad.subject.value === contactUrlQuad.object.value) {
          const contact = new Contact(contactUrlQuad.object.value, nickNameQuad.object.value);
          const arrayContact = contact.urlPod.split('/');
          const urlFormatted = arrayContact[0] + '//' + arrayContact[2] + '/';
          contact.urlPod = urlFormatted;
          contacts.push(contact);
          nickControl = true;
        }
      });
      if (nickControl === false) {
        const contact = new Contact(contactUrlQuad.object.value, contactUrlQuad.object.value.split('/')[2]);
        const arrayContact = contact.urlPod.split('/');
        const urlFormatted = arrayContact[0] + '//' + arrayContact[2] + '/';
        contact.urlPod = urlFormatted;
        contacts.push(contact);
      }
    });
    return contacts;
  }
}
