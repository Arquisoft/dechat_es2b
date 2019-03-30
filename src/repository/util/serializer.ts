import * as N3 from 'n3';
import {Message} from '../../model/message';
import {Contact} from '../../model/contact';

const {namedNode, literal, defaultGraph, quad} = N3.DataFactory;

export class Serializer {

  static serializeMessages = (messages: Message[]): string => {
    const json = JSON.stringify(messages);
    return json;
  };

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
    let parser = new N3.Parser();
    const writer = new N3.Writer();
    let i = 0;

    const parsePromisePrefixes = new Promise((resolve, reject) => {
      parser = new N3.Parser();
      parser.parse(
        oldData,
        (error, quadC, prefixes) => {
          if (prefixes) {
            writer.addPrefixes(prefixes, null);
            writer.addPrefix(newContact.urlPod.split('/')[2].replace(/\./gi, ''), newContact.urlPod, null);
            resolve('Finish');
          }
        });
    });

    const parsePromiseQuads = new Promise((resolve, reject) => {
      parser = new N3.Parser();
      parser.parse(
        oldData,
        (error, quadC, prefixes) => {
          if (quadC) {
            writer.addQuad(quadC);
          } else {
            writer.addQuad(namedNode(':me'), namedNode('n0:knows'), namedNode(newContact.urlPod));
            if (newContact.nickname != null && newContact.nickname.trim() !== '') {
              writer.addQuad(namedNode(newContact.urlPod),
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
          contact.urlPod = contact.urlPod.replace('profile/card#me', '').replace('profile/card#', '').replace('profile/card', '');
          contacts.push(contact);
          nickControl = true;
        }
      });
      if (nickControl === false) {
        const contact = new Contact(contactUrlQuad.object.value, contactUrlQuad.object.value.split('/')[2]);
        contact.urlPod = contact.urlPod.replace('profile/card#me', '').replace('profile/card#', '').replace('profile/card', '');
        contacts.push(contact);
      }
    });
    return contacts;
  }
}
