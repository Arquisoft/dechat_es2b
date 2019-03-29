import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {Serializer} from './serializer';

describe('Serializer', () => {
  let contacts: Contact[];

  beforeEach(() => {
    contacts = [];
    contacts.push(new Contact('https://test1.mock.up/profile/card#me', 'Test1'));
    contacts.push(new Contact('https://test2.mock.up/profile/card#me', 'Test2'));
  });

  it('should deserialize the serializer messages', () => {
    const messages = [];
    messages.push(new Message(contacts[0], contacts[1], new Date(), 'First Message'));
    messages.push(new Message(contacts[1], contacts[0], new Date(), 'Second Message'));
    messages.push(new Message(contacts[0], contacts[1], new Date(), 'Third Message'));
    messages.push(new Message(contacts[1], contacts[0], new Date(), 'Fourth Message'));
    contacts[0].nickname = null;
    contacts[1].nickname = null;
    expect(Serializer.deserializeMessages(Serializer.serializeMessages(messages))).toEqual(messages);
  });

  it('should deserialize the serializer contacts', () => {
    Serializer.serializeContact(contacts[0], '').then(str => {
      Serializer.deserializeContacts(str).then(parsed => {
        expect(parsed[0]).toEqual(contacts[0]);
      });
    });
  });
});
