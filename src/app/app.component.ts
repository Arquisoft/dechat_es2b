import {Component, OnInit} from '@angular/core';
import {Serializer} from '../repository/util/serializer';
import {Message} from '../model/message';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dechat';

  onClick() {
    // const contactFrom = new Contact('https://acg96.inrupt.net/profile/me#', 'acg96');
    // const contactTo = new Contact('https://enolgargon.inrupt.net/profile/me#', 'enol');
    // const mess1 = new Message(contactFrom, contactTo, new Date(), 'Prubea mensaje 1');
    // const mess2 = new Message(contactFrom, contactTo, new Date(), 'Prubea mensaje 2');
    // const mess3 = new Message(contactFrom, contactTo, new Date(), 'Prubea mensaje 3');
    // const mess4 = new Message(contactFrom, contactTo, new Date(), 'Prubea mensaje 4');
    // const mess = [];
    // mess.push(mess1);
    // mess.push(mess2);
    // mess.push(mess3);
    // mess.push(mess4);
    // const json = Serializer.serializeMessages(mess);
    // const mensajes = Serializer.deserializeMessages(json);
    // alert(mensajes.length);
    // for (let i = 0; i < mensajes.length; ++i) {
    //   alert(mensajes[i].from.nickname + ' - ' + mensajes[i].from.urlPod + ' - ' + mensajes[i].to.nickname + ' - ' + mensajes[i].to.urlPod + ' - ' + new Date(mensajes[i].date) + ' - ' + mensajes[i].text);
    // }
  }


}
