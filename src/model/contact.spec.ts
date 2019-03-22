import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact('https://usuario2.pod.prueba/', 'Prueba')).toBeTruthy();
  });
});
