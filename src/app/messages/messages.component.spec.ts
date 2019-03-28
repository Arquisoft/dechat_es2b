import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {MockRepository} from '../../repository/impl/mock-repository';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MessageComponent} from '../message/message.component';

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
});
