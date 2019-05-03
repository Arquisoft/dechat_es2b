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
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: LandingComponent
  },
  {
    path: 'messaging',
    component: MessagingComponent
  }
];

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
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
