import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageComponent} from './message.component';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {MessagesComponent} from '../messages/messages.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ElementRef} from '@angular/core';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageComponent,
        MessagesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [
        MessagesComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.message = new Message(new Contact('https://mensaje.from.mock.up/', 'PruebaFrom'),
      new Contact('https://mensaje.to.mock.up/', 'PruebaTo'), new Date(), 'texto del mensaje');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should confirm it"s not media', () => {
    expect(component.isRepresentable(component.message)).toBeFalsy();
  });
});
