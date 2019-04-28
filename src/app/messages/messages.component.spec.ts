import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {MockRepository} from '../../repository/impl/mock-repository';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MessageComponent} from '../message/message.component';
import {Contact} from '../../model/contact';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let repo: MockRepository;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagesComponent,
        MessageComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    repo = new MockRepository();
    component = fixture.componentInstance;
    component.repositoryFactoryService.config = repo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logged in a user', () => {
    component.makeSureLogin().then(() => expect(component.myContact).toEqual(repo.myContact));
  });

  it('should have the posibility of logout a user', () => {
    component.makeSureLogin().then(() => {
      expect(repo.logedIn).toBeTruthy();
      component.logout();
      expect(repo.logedIn).toBeFalsy();
    });
  });

  it('should can select a conversation', () => {
    const contact = new Contact('htpps://prueba.mock.up/profile/card#me', 'prueba');
    component.selectConversation(contact, null);
    expect(component.contact).toBe(contact);
  });

  it('should can send a message pressing the button', () => {
    const text = 'Hi, this is a test';
    const contact = new Contact('htpps://prueba.mock.up/profile/card#me', 'prueba');
    component.selectConversation(contact, null);
    component.myContact = new Contact('htpps://prueba2.mock.up/profile/card#me', 'prueba2');
    component.message = text;
    component.sendMessage(null).then(() => {
      expect(repo.messages.length).toBe(1);
      expect(repo.messages[0].text).toBe(text);
    });
  });

  it('should can send a message pressing intro', () => {
    const text = 'Hi, this is a test';
    const contact = new Contact('htpps://prueba.mock.up/profile/card#me', 'prueba');
    component.selectConversation(contact, null);
    component.myContact = new Contact('htpps://prueba2.mock.up/profile/card#me', 'prueba2');
    component.message = text;
    component.sendMessage(new KeyboardEvent('keydown', {
      key: 'Enter',
      code: '13'
    })).then(() => {
      expect(repo.messages.length).toBe(1);
      expect(repo.messages[0].text).toBe(text);
    });
  });

  it('should show the menu', () => {
    const s = component.toggleShowed;
    component.showMenu();
    expect(s).toEqual(!component.toggleShowed);
  });

  it('should show an error', () => {
    component.manageFileUpload(null, 0, null);
    expect(component.error).toEqual(true);
  });

  it('should erase a message', () => {
    const text = 'Hi, this is a test';
    const contact = new Contact('htpps://prueba.mock.up/profile/card#me', 'prueba');
    component.selectConversation(contact, null);
    component.myContact = new Contact('htpps://prueba2.mock.up/profile/card#me', 'prueba2');
    component.message = text;
    component.sendMessage(null).then(() => {
      component.deleteMessage(repo.messages[1]);
      expect(repo.messages.length).toBe(0);
      expect(repo.messages[0]).toBe(null);
    });
  });
  it('should erase all messages', () => {
    let text = 'Hi, this is a test';
    const contact = new Contact('htpps://prueba.mock.up/profile/card#me', 'prueba');
    component.selectConversation(contact, null);
    component.myContact = new Contact('htpps://prueba2.mock.up/profile/card#me', 'prueba2');
    component.message = text;
    component.sendMessage(null).then(() => {});
    component.findNewMessages();
    text = 'Hi, this is a test2';
    component.selectConversation(contact, null);
    component.myContact = new Contact('htpps://prueba2.mock.up/profile/card#me', 'prueba2');
    component.message = text;
    component.sendMessage(null).then(() => {
      component.showDeleteAllOwnMessages(null);
      expect(repo.messages.length).toBe(0);
      expect(repo.messages[0]).toBe(null);
    });
  });
});
