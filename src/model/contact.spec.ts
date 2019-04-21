import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact('https://usuario2.pod.prueba/', 'Prueba')).toBeTruthy();
  });
  it('should change the urlPod', () => {
    const c = new Contact('https://usuario2.pod.prueba/', 'Prueba');
    const u = c.isUnknown;
    expect(c).toBeTruthy();
    expect(u).toBe(c.isUnknown);
    c.urlPod = 'https://usuario2.pod.prueba';
    expect(c.urlPod).toBe('https://usuario2.pod.prueba');
  });

  it('should change the image', () => {
    const c = new Contact('https://usuario2.pod.pruea/', 'Prueba');
    expect(c).toBeTruthy();
    c.imageUrl = 'algo';
    expect(c.imageUrl).toBe('algo');
  });
});
