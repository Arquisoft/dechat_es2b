import {Component, Input, OnInit} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';

export class Message {

  content: string;
  date: Date;
  recipientURL: string;
  senderURL: string;

  constructor() { }

  setContent(contenido) {
    this.content = contenido;
    this.date = new Date();
  }

  getContent() {
    return this.content;
  }

  getDate() {
    return this.date;
  }

  setRecipientURL(recipientURL) {
    this.recipientURL = recipientURL;
  }

  getRecipientURL() {
    return this.recipientURL;
  }

  getSenderURL() {
    return this.senderURL;
  }

  setSenderURL(senderURL) {
    this.senderURL = senderURL;
  }

  toString() {
    return this.senderURL + ';' + this.recipientURL + ';' + this.date.toISOString() + ';' + this.content;
  }
}
