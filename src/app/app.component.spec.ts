import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {MessagesComponent} from './messages/messages.component';
import {FormsModule} from '@angular/forms';
import {MessageComponent} from './message/message.component';
import {ContactComponent} from './contact/contact.component';
import {BrowserModule} from '@angular/platform-browser';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {MockRepository} from '../repository/impl/mock-repository';
import {LoginService} from '../service/login.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent,
        ContactsComponent,
        MessageComponent,
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    }).compileComponents();
    new RepositoryFactoryService(new LoginService()).config = new MockRepository();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
