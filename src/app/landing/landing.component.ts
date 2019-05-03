import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../../service/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  identityProvider;

  constructor(private modalService: NgbModal, private login: LoginService, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
      const objParams = this.getParamsUrl();
      if (objParams['access_token'] != null) {
        this.login.login(this.identityProvider, function() {
          this.router.navigateByUrl('/messaging');
        }.bind(this));
      }
  }

  getParamsUrl() {
    const rawParams = window.location.hash.substr(1, window.location.hash.length);
    const arrayParams = rawParams.split('&');
    const objParams = {};
    for (let i = 0; i < arrayParams.length; ++i) {
      const splitedParam = arrayParams[i].split('=');
      const nameKey = splitedParam[0];
      const value = splitedParam[1];
      objParams[nameKey] = value;
    }
    return objParams;
  }

  open(content) {
    // Si no está la cookie de inicio de sesión habilitada en inrupt mostrar la ventana
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.login.login(this.identityProvider, function() {
          this.router.navigateByUrl('/messaging');
        }.bind(this));
      }, (reason) => {
        // If the modal is closed using the cross button or clicking out of it
      });
    //}
  }

}
