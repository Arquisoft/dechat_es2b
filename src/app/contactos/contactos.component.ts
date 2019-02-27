import { Component, OnInit } from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactos = ['Contacto1', 'Contacto2', 'Contacto3'];

  constructor(private rdf: RdfService, private router: Router) {
    const me = rdf.getMe();
    if (me == null) {
      console.log('Que ho?');
      router.navigateByUrl('/login');
    } else {
      console.log(rdf.getContacts(me));
    }
  }

  ngOnInit() {
  }

}
