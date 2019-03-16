import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';
import {Message} from './message';
import {Contact} from '../contact';

declare let $rdf: any;

const URLRECIPIENTDEFAULT = 'enolgargon.inrupt.net';

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
        const me = await this.rdf.getMe();
        if (me == null) {
            this.router.navigateByUrl('/login');
        } else {
            const message = new Message();
            message.setSenderURL(me.uri);
            message.setContent(this.content);
            // Debiera recibir un receptor
            message.setRecipientURL(URLRECIPIENTDEFAULT);
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
    }

    showMessages = async () => {
        const me = await this.rdf.getMe();
        await this.rdf.readConversation(URLRECIPIENTDEFAULT).then(messages => {
            const messagesFormatted = [];
            messages.forEach(function(message) {
                let author = 'Yo';
                if (message.getSenderURL() !== me.uri) {
                    author = URLRECIPIENTDEFAULT.split('.')[0];
                }
                messagesFormatted.push(author + ' - ' + message.getDate().toLocaleString('es-ES') + ' - ' +  message.getContent());
            });
            this.messages = messagesFormatted;
        });
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    async ngOnInit() {
        setInterval(this.showMessages, 2000);
    }

  selectConversation(contact: Contact) {
    this.contact = contact;
  }
}
