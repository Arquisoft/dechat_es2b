import {Message} from './message';
import {Contact} from './contact';

describe('Message', () => {
  it('should create an instance', () => {
    const c1 = new Contact('https://usuario.pod.prueba/', 'Prueba1');
    const c2 = new Contact('https://usuario2.pod.prueba/', 'Prueba2');
    expect(new Message(c1, c2, new Date(), 'Hola')).toBeTruthy();
  });
});
