import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';
import {Message} from './message';
import {Contact} from '../contact';

declare let $rdf: any;

@Component({
    selector: 'app-mensajes',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  contact: Contact;

    content = '';
    @Input('result') result: string;
    messages;

    constructor(private rdf: RdfService, private router: Router) {
    }

    async onSubmit() {
        if (this.contact != null) {
            const me = await this.rdf.getMe();
            if (me == null) {
                this.router.navigateByUrl('/login');
            } else {
                const message = new Message();
                message.setSenderURL(me.uri);
                message.setContent(this.content);
                // Debiera recibir un receptor
                const selectedContact = this.contact.url;
                const urlSelectedContact = selectedContact.split('/')[2];
                message.setRecipientURL(urlSelectedContact);
                this.rdf.addMessage(message).then(() => {
                    this.result = 'Se ha enviado con éxito';
                    this.delay(2000).then(() => {
                        this.result = '';
                        this.showMessages();
                    });
                }, err => {
                    this.result = 'Error en el envío';
                });
            }
        } else {
            this.result = 'Debes seleccionar un contacto primero';
            await this.delay(1000);
            this.result = '';
        }
    }

    showMessages = async () => {
        if (this.contact != null) {
            const me = await this.rdf.getMe();
            const selectedContact = this.contact.url;
            const urlSelectedContact = selectedContact.split('/')[2];
            await this.rdf.readConversation(urlSelectedContact).then(messages => {
                const messagesFormatted = [];
                messages.forEach(function (message) {
                    let author = 'Yo';
                    if (message.getSenderURL() !== me.uri) {
                        author = urlSelectedContact.split('.')[0];
                    }
                    messagesFormatted.push(author + ' - ' + message.getDate().toLocaleString('es-ES') + ' - ' + message.getContent());
                });
                this.messages = messagesFormatted;
            });
        }
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    async ngOnInit() {
        setInterval(this.showMessages, 2000);
    }

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.showMessages();
  }
}
