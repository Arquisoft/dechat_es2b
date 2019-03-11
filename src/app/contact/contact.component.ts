import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
    selector: 'app-contacto',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    @Input('contact') contact: Contact;

    constructor() {
    }
}
