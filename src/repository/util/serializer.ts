import * as N3 from 'N3';
import {Message} from '../../model/message';
import {Contact} from '../../model/contact';

// const { namedNode, literal, defaultGraph, quad } = N3.DataFactory;

export class Serializer {
  // TODO Esquemas que hay que utilizar:
  //        https://schema.org/Message
  //        http://xmlns.com/foaf/spec/#term_knows
  //        http://xmlns.com/foaf/spec/#term_nick
  static serializeMessages = (messages: Message[]): string => {
    const json = JSON.stringify(messages);
    return json;

    // 1. Utilizando la libreria, crear un grafo vacio
    // 2. Añadir los mensajes al grafo
    // 3. Obtener la cadena de texto que representa el grafo. Lo hace la librería
    // return '';
  }

  static deserializeMessages = (data: string): Message[] => {
    const messages = [];
    const objJSON = JSON.parse(data);
    for (let i = 0; i < objJSON.length; ++i) {
      const from = new Contact(objJSON[i]['_from']['_urlPod'], objJSON[i]['_from']['_nickname']);
      const to = new Contact(objJSON[i]['_to']['_urlPod'], objJSON[i]['_to']['_nickname']);
      const messg = new Message(from, to, objJSON[i]['_date'], objJSON[i]['_text']);
      messages.push(messg);
    }
    return messages;

    // 1. Utilizando la librería, parsear el atributo data. Es decir, crear un grafo con los datos que contiene
    // 2. Investiga un poco, creo que cada nodo puede devolverse como un mensaje
    // 2.1 Si ya te da una estructura como los mensajes (Ojo estructura, aunque no se llame igual,
    //     si tiene los mismo campos vale), return de eso
    // 2.2 Si no, recorrer la respuesta de la libreria y crear objetos de tipo mensaje que se devuelven
    // return [];
  }

  static serializeContact = (newContact: Contact, oldData: string): string => {
    // TODO Hacer antes los mensajes
    // 1. Utilizando la libreria, parsear el atributo oldData. Es decir, crear un grafo con la información textual
    // const store = N3.Store();
    // const myQuad = quad(
    //   namedNode('https://ruben.verborgh.org/profile/#me'),
    //   namedNode('http://xmlns.com/foaf/0.1/givenName'),
    //   literal('Ruben', 'en'),
    //   defaultGraph(),
    // );
    // console.log(myQuad.subject.value);         // https://ruben.verborgh.org/profile/#me
    // console.log(myQuad.object.value);          // Ruben
    // console.log(myQuad.object.datatype.value); // http://www.w3.org/1999/02/22-rdf-syntax-ns#langString
    // console.log(myQuad.object.language);       // en
    // 2. A ese grafo, añadirle un elemento nuevo, que es el que esta en el atributo newContact

    // 3. Devolver la representación en modo texto de ese grafo con formato rdf. Lo hace la librería
    return '';
  }

  static deserializeContacts = (data: string): Contact[] => {
    // TODO Hacer antes los mensajes
    // Igual que el deserializer de los mensajes.
    // 1. Crear un grafo con la info del atributo data

    // 2. Recorrer esa info y crear los objetos de tipo contacto que se devuelven
    //    OJO: Obligatorio recorrer en este caso porque hay cosas que no son contactos

    return [];
  }
}
