import { Component, OnInit } from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts = ['Contacto1', 'Contacto2', 'Contacto3'];

  constructor(private rdf: RdfService, private router: Router) {
    this.loadContacts();
  }

  async loadContacts() {
    const me = await this.rdf.getMe();
    if (me == null) {
      this.router.navigateByUrl('/login');
    } else {
      console.log(this.rdf.getContacts(me));
    }
  }

  private addContact() {
    this.router.navigateByUrl('contact-add');
  }
}
