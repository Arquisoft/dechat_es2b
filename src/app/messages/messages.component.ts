import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input('content') content: string;
  date: Date;
  receiver;

  constructor() { }

  addContent(contenido) {
    this.content = contenido;
    this.date = new Date();
  }

  addReceiver(urlReceiver) {
    this.receiver = urlReceiver;
  }

  ngOnInit() {
  }

}
