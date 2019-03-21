import * as simple from 'simplerdf';
import * as N3 from 'N3';
import {Message} from '../../model/message';
import {Contact} from '../../model/contact';

const { namedNode, literal, defaultGraph, quad } = N3.DataFactory;

export class Serializer {
  // TODO Esquemas que hay que utilizar:
  //        https://schema.org/Message
  //        http://xmlns.com/foaf/spec/#term_knows
  //        http://xmlns.com/foaf/spec/#term_nick

  static serializeMessages = (messages: Message[]): string => {
    const json = JSON.stringify(messages);
    return json;
  }

  static deserializeMessages = (data: string): Message[] => {
    const messages = [];
    const objJSON = JSON.parse(data);
    for (let i = 0; i < objJSON.length; ++i) {
      const from = new Contact(objJSON[i]['_from']['_urlPod'], null);
      const to = new Contact(objJSON[i]['_to']['_urlPod'], null);
      const messg = new Message(from, to, objJSON[i]['_date'], objJSON[i]['_text']);
      messages.push(messg);
    }
    return messages;
  }

  static serializeContact = (newContact: Contact, oldData: string): string => {
    // TODO Hacer antes los mensajes
    // 1. Utilizando la libreria, parsear el atributo oldData. Es decir, crear un grafo con la información textual

    // 2. A ese grafo, añadirle un elemento nuevo, que es el que esta en el atributo newContact

    // 3. Devolver la representación en modo texto de ese grafo con formato rdf. Lo hace la librería
    return '';
  }

  private static addPrefixeContact(prefixes) {
    console.log('# Thats all, folks!', prefixes);
  }

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
          contacts.push(contact);
          nickControl = true;
        }
      });
      if (nickControl === false) {
        const contact = new Contact(contactUrlQuad.object.value, contactUrlQuad.object.value.split('/')[2]);
        contacts.push(contact);
      }
    });
    return contacts;
  }

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
          // Serializer.addPrefixeContact(prefixes);
          i = 1;
        }
      });
    while (i === 0) {
      const e = await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return Serializer.rebuildContacts(contactUrlQuads, nickNameQuads);
  }
}
