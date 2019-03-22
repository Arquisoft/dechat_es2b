import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {RepositoryFactoryService} from '../../repository/repository-factory.service';
import {LoginService} from '../../service/login.mockup.service';
import {MockRepository} from '../../repository/impl/mock-repository';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MessageComponent} from '../message/message.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

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
    })
      .compileComponents();
    new RepositoryFactoryService(new LoginService()).config = new MockRepository();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
