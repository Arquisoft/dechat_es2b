import {Component, ViewChild} from '@angular/core';
import {MessagesComponent} from './messages/messages.component';
import {Contact} from '../model/contact';
import {LoginService} from '../service/login.service';
import {Serializer} from '../repository/util/serializer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  constructor(private loginService: LoginService) {
    loginService.myContact();
    // const data = '@prefix : <#>.\n' +
    //   '@prefix solid: <http://www.w3.org/ns/solid/terms#>.\n' +
    //   '@prefix pro: <./>.\n' +
    //   '@prefix n0: <http://xmlns.com/foaf/0.1/>.\n' +
    //   '@prefix schem: <http://schema.org/>.\n' +
    //   '@prefix ldp: <http://www.w3.org/ns/ldp#>.\n' +
    //   '@prefix inbox: </inbox/>.\n' +
    //   '@prefix sp: <http://www.w3.org/ns/pim/space#>.\n' +
    //   '@prefix n1: </>.\n' +
    //   '@prefix n2: <https://acg96prueba.inrupt.net/>.\n' +
    //   '@prefix enolg: <https://enolgargon.inrupt.net/>.\n' +
    //   '\n' +
    //   'pro:card a n0:PersonalProfileDocument; n0:maker :me; n0:primaryTopic :me.\n' +
    //   '\n' +
    //   ':me\n' +
    //   '    a schem:Person, n0:Person;\n' +
    //   '    ldp:inbox inbox:;\n' +
    //   '    sp:preferencesFile </settings/prefs.ttl>;\n' +
    //   '    sp:storage n1:;\n' +
    //   '    solid:account n1:;\n' +
    //   '    solid:privateTypeIndex </settings/privateTypeIndex.ttl>;\n' +
    //   '    solid:publicTypeIndex </settings/publicTypeIndex.ttl>;\n' +
    //   '    n0:knows n2:, enolg:;\n' +
    //   '    n0:name "Andr\u00e9s".\n' +
    //   'enolg:\n' +
    //   '    n0:nick "Enol".';
    // Serializer.deserializeContacts(data);
  }

  selectContact(contact: Contact): void {
    this.messages.selectConversation(contact);
  }
}
