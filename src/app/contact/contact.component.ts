import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('url') url: string;

  constructor() { }

  ngOnInit() {
  }

}
