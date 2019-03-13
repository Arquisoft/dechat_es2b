import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';

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

  @Input('content') content: string;
  date: Date;
  recipient;

  constructor() { }

  addContent(contenido) {
    this.content = contenido;
    this.date = new Date();
  }

  addRecipient(urlRecipient) {
    this.recipient = urlRecipient;
  }

  getContentInArraySchema() {
    const array = [];
    array.push(SCHEMA('recipient'));
    array.push(this.recipient);
    array.push(SCHEMA('dateSent'));
    array.push(this.date.toISOString());
    array.push(SCHEMA('messageAttachment'));
    array.push(CREATIVEWORK('text'));
    array.push(this.content);
    return array;
  }

  ngOnInit() {
  }

}
