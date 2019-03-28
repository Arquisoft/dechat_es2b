import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactsComponent} from './contacts.component';
import {RepositoryFactoryService} from '../../repository/repository-factory.service';
import {MockRepository} from '../../repository/impl/mock-repository';
import {ContactComponent} from '../contact/contact.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import {LoginService} from '../../service/login.service';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

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
        AppComponent
      ]
    })
      .compileComponents();
    new RepositoryFactoryService(new LoginService()).config = new MockRepository();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
