import {Component, Inject, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';
import {NamedNode} from 'rdf-js';
import {Contact} from '../contact';
import {MessagingComponent} from '../message/messaging.component';

@Component({
  selector: 'app-contactos',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(@Inject(MessagingComponent) private parent: MessagingComponent, private rdf: RdfService, private router: Router) {
    this.contacts = [];
    this.loadContacts();
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.parent.selectContact(contact);
  }

  async loadContacts() {
    const me = await this.rdf.getMe();
    if (me == null) {
      this.router.navigateByUrl('/login');
    } else {
      const contacts = await this.rdf.getContacts(me);
      console.log(contacts);
      if ((<NamedNode>contacts).value) {
        this.insertContact(contacts);
      } else {
        this.insertContacts(contacts);
      }
    }
  }

  insertContacts(results: [NamedNode]) {
    results.forEach(function (value) {
      this.insertContact(value.object);
    }.bind(this));
  }

  insertContact(node: NamedNode) {
    this.contacts.push(new Contact(node.value, "Nombre"));
  }

  addContact() {
    this.router.navigateByUrl('contact-add');
  }
}
