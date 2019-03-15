import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';
import {Message} from './message';

declare let $rdf: any;
const SIOC = $rdf.Namespace('http://rdfs.org/sioc/spec/');
const SCHEMA = $rdf.Namespace('http://schema.org/Message');
const CREATIVEWORK = $rdf.Namespace('http://schema.org/CreativeWork');

@Component({
    selector: 'app-mensajes',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

    content = '';
    @Input('result') result: string;

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
            message.setRecipientURL('enolgargon.inrupt.net');
            this.rdf.addMessage(message);
            this.result = 'Se ha enviado con éxito';
            await this.delay(1000);
            this.result = '';
        }
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

    ngOnInit() {
    }

}
