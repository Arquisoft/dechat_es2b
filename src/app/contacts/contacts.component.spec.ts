import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactsComponent} from './contacts.component';
import {MockRepository} from '../../repository/impl/mock-repository';
import {ContactComponent} from '../contact/contact.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {delay} from 'q';
import {Contact} from '../../model/contact';
import {MessagingComponent} from '../messaging/messaging.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let repo: MockRepository;
  let originalTimeout;

  beforeEach(async(() => {
    // @ts-ignore
    TestBed.configureTestingModule({
      declarations: [
        ContactsComponent,
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ], providers: [
        MessagingComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    repo = new MockRepository();
    component.contactService.repository.config = repo;
    fixture.detectChanges();
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add contacts', () => {
    component.contactID = 'https://mkock.up/profile/card#me';
    component.contactNick = 'Prueba';
    component.addNewContact();
    delay(10000).then(() => {
      expect(repo.contacts.map(c => c.nickname)).toContain('Prueba');
    });
  });

  it('should load contacts', async () => {
    component.ngOnInit().then(res => {
      expect(component.contacts).toEqual(component.allContacts);
    });
  });

  it('should search contacts using timer', () => {
    const contacts = [];
    const contact = new Contact('https://test1.mock.up/profile/card#me', 'Test1');
    contacts.push(contact);
    contacts.push(new Contact('https://test2.mock.up/profile/card#me', 'Test2'));
    component.contacts = contacts;
    component.allContacts = contacts;
    component.search = 'Test1';
    component.writeSearch();
    expect(component.searchCall).not.toBeNull();
    delay(1000).then(() => {
      expect(component.allContacts).toEqual(contacts);
      expect(component.contacts.length).toBe(1);
      expect(component.contacts[0]).toEqual(contact);
    });
  });

  it('should wait timeout if user write again', () => {
    const contacts = [];
    const contact = new Contact('https://test1.mock.up/profile/card#me', 'Test1');
    contacts.push(contact);
    contacts.push(new Contact('https://test2.mock.up/profile/card#me', 'Test2'));
    component.contacts = contacts;
    component.allContacts = contacts;
    component.search = 'Test';
    component.writeSearch();
    expect(component.searchCall).not.toBeNull();
    expect(component.contacts).toEqual(component.allContacts);
    component.search += '1';
    expect(component.contacts).toEqual(component.allContacts);
    delay(500).then(() => {
      expect(component.allContacts).toEqual(contacts);
      expect(component.contacts.length).toBe(1);
      expect(component.contacts[0]).toEqual(contact);
    });
  });

  it('should search contacts just for testing', () => {
    const contacts = [];
    const contact = new Contact('https://test1.mock.up/profile/card#me', 'Test1');
    contacts.push(contact);
    contacts.push(new Contact('https://test2.mock.up/profile/card#me', 'Test2'));
    component.contacts = contacts;
    component.allContacts = contacts;
    component.search = 'Test1';
    component.makeSearch();
    delay(200).then(() => {
      expect(component.allContacts).toEqual(contacts);
      expect(component.contacts.length).toBe(1);
      expect(component.contacts[0]).toEqual(contact);
    });
  });
});
