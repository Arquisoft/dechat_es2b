import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingComponent } from './messaging.component';
import {AppComponent} from '../app.component';
import {MessagesComponent} from '../messages/messages.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {MessageComponent} from '../message/message.component';
import {ContactComponent} from '../contact/contact.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('MessagingComponent', () => {
  let component: MessagingComponent;
  let fixture: ComponentFixture<MessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessagingComponent,
        MessagesComponent,
        ContactsComponent,
        MessageComponent,
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
