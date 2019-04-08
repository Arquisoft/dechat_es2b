import {Message} from './message';
import {Contact} from './contact';

describe('Message', () => {
  it('should create an instance', () => {
    const c1 = new Contact('https://usuario.pod.prueba/', 'Prueba1');
    const c2 = new Contact('https://usuario2.pod.prueba/', 'Prueba2');
    expect(new Message(c1, c2, new Date(), 'Hola')).toBeTruthy();
  });

  it('should give back the data', () => {
    const c1 = new Contact('https://usuario.pod.prueba/', 'Prueba1');
    const c2 = new Contact('https://usuario2.pod.prueba/', 'Prueba2');
    const d = new Date();
    const m = new Message(c1, c2, d, 'Hola');
    expect(m).toBeTruthy();
    expect(m.from).toBe(c1);
    expect(m.to).toBe(c2);
    expect(m.date).toBe(d);
    expect(m.text).toBe('Hola');
  });

  it('should change the data', () => {
    const c1 = new Contact('https://usuario.pod.pruea/', 'Pruea1');
    const c2 = new Contact('https://usuario2.pod.pruea/', 'Pruea2');
    const d = new Date();
    const m = new Message(c1, c2, d, 'Hola');
    const c1a = new Contact('https://usuario.pod.prueba/', 'Prueba1');
    const c2a = new Contact('https://usuario2.pod.prueba/', 'Prueba2');
    const da = new Date();
    m.from = c1a;
    m.to = c2a;
    m.text = 'Hola2';
    m.date = da;
    expect(m).toBeTruthy();
    expect(m.from).toBe(c1a);
    expect(m.to).toBe(c2a);
    expect(m.date).toBe(da);
    expect(m.text).toBe('Hola2');
  });
});
