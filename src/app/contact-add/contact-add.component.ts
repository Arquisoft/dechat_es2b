import {Component} from '@angular/core';
import {RdfService} from '../services/rdf.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-contact-add',
    templateUrl: './contact-add.component.html',
    styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
    podUrl = '';
    nick = '';

    constructor(private rdf: RdfService, private router: Router) {
        rdf.checkConversationFile('prueba1');
    }

    async onSubmit() {
        const me = await this.rdf.getMe();
        if (me == null) {
            this.router.navigateByUrl('/login');
        } else {
            this.rdf.addContact(me, this.podUrl);
            this.podUrl = '';
            this.nick = '';
        }
    }

}
