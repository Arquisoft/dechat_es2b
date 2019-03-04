import { Component, OnInit } from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';
import {NamedNode} from 'rdf-js';

@Component({
  selector: 'app-contactos',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts = [];

  constructor(private rdf: RdfService, private router: Router) {
    this.loadContacts();
  }

  async loadContacts() {
    const me = await this.rdf.getMe();
    if (me == null) {
      this.router.navigateByUrl('/login');
    } else {
      const contacts = await this.rdf.getContacts(me);
      if ((<NamedNode>contacts).value) {
        this.insertContact(contacts);
      } else {
        this.insertContacts(contacts);
      }
    }
  }

  insertContacts(results: [NamedNode]) {
    results.forEach(this.insertContact);
  }

  insertContact(node: NamedNode) {
    this.contacts.push(node.value);
  }

  private addContact() {
    this.router.navigateByUrl('contact-add');
  }
}
