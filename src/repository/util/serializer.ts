import {Message} from '../../model/message';
import {Contact} from '../../model/contact';

export class Serializer {
  // TODO Esquemas que hay que utilizar:
  //        https://schema.org/Message
  //        http://xmlns.com/foaf/spec/#term_knows
  //        http://xmlns.com/foaf/spec/#term_nick
  static serializeMessages = (messages: Message[]): string => {
    // TODO
    // 1. Utilizando la libreria, crear un grafo vacio

    // 2. Añadir los mensajes al grafo

    // 3. Obtener la cadena de texto que representa el grafo. Lo hace la librería
    return '';
  };

  static deserializeMessages = (data: string): Message[] => {
    // TODO
    // 1. Utilizando la librería, parsear el atributo data. Es decir, crear un grafo con los datos que contiene

    // 2. Investiga un poco, creo que cada nodo puede devolverse como un mensaje
    // 2.1 Si ya te da una estructura como los mensajes (Ojo estructura, aunque no se llame igual,
    //     si tiene los mismo campos vale), return de eso
    // 2.2 Si no, recorrer la respuesta de la libreria y crear objetos de tipo mensaje que se devuelven
    return [];
  };

  static serializeContact = (newContact: Contact, oldData: string): string => {
    // TODO Hacer antes los mensajes
    // 1. Utilizando la libreria, parsear el atributo oldData. Es decir, crear un grafo con la información textual

    // 2. A ese grafo, añadirle un elemento nuevo, que es el que esta en el atributo newContact

    // 3. Devolver la representación en modo texto de ese grafo con formato rdf. Lo hace la librería
    return '';
  };

  static deserializeContacts = (data: string): Contact[] => {
    // TODO Hacer antes los mensajes
    // Igual que el deserializer de los mensajes.
    // 1. Crear un grafo con la info del atributo data

    // 2. Recorrer esa info y crear los objetos de tipo contacto que se devuelven
    //    OJO: Obligatorio recorrer en este caso porque hay cosas que no son contactos

    return [];
  };
}
