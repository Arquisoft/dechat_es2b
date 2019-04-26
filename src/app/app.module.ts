import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MessagesComponent} from './messages/messages.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactComponent} from './contact/contact.component';
import {MessageComponent} from './message/message.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MessagingComponent } from './messaging/messaging.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ContactsComponent,
    MessageComponent,
    ContactComponent,
    MessagingComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
