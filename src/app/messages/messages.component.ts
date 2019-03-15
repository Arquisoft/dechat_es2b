import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';
import {Message} from './message';

declare let $rdf: any;
const SIOC = $rdf.Namespace('http://rdfs.org/sioc/spec/');
const SCHEMA = $rdf.Namespace('http://schema.org/Message');
const CREATIVEWORK = $rdf.Namespace('http://schema.org/CreativeWork');

const URLRECIPIENTDEFAULT = 'enolgargon.inrupt.net';

@Component({
    selector: 'app-mensajes',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

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
            this.rdf.addMessage(message);
            this.result = 'Se ha enviado con éxito';
            await this.delay(1000);
            this.result = '';
            const messages = await this.rdf.readConversation(URLRECIPIENTDEFAULT);
            this.showMessages(messages);
        }
    }

    async showMessages(messages) {
        const messagesFormatted = [];
        const me = await this.rdf.getMe();
        messages.forEach(function(message) {
            let author = 'Yo';
            if (message.getSenderURL() !== me.uri) {
                author = URLRECIPIENTDEFAULT.split('.')[0];
            }
            messagesFormatted.push(author + ' - ' + message.getDate().toLocaleString('es-ES') + ' - ' +  message.getContent());
        });
        this.messages = messagesFormatted;
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    // addContent(contenido) {
    //   this.content = contenido;
    //   this.date = new Date();
    // }
    //
    // addRecipient(urlRecipient) {
    //   this.recipient = urlRecipient;
    // }
    //
    // getContentInArraySchema() {
    //   const array = [];
    //   array.push(SCHEMA('recipient'));
    //   array.push(this.recipient);
    //   array.push(SCHEMA('dateSent'));
    //   array.push(this.date.toISOString());
    //   array.push(SCHEMA('messageAttachment'));
    //   array.push(CREATIVEWORK('text'));
    //   array.push(this.content);
    //   return array;
    // }

    async ngOnInit() {
        const messages = await this.rdf.readConversation(URLRECIPIENTDEFAULT);
        this.showMessages(messages);
    }

}
