import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from '../../service/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  identityProvider;

  constructor(private modalService: NgbModal, private login: LoginService, private router: Router,
              private activatedRoute: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit() {
    if (this.cookieService.check('identityProvider')) {
      let objParams = this.getParamsUrl();
      if (!this.cookieService.check('objParams')) {
        if (objParams['access_token'] != null) {
          this.cookieService.set('objParams', JSON.stringify(objParams));
        } else {
          this.cookieService.deleteAll();
          this.router.navigateByUrl('/messaging');
        }
      } else {
        objParams = JSON.parse(this.cookieService.get('objParams'));
      }
      this.identityProvider = this.cookieService.get('identityProvider');
      if (objParams['access_token'] != null) {
        this.login.login(this.identityProvider, function() {
          this.router.navigateByUrl('/messaging');
        }.bind(this));
      }
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
    if (!this.cookieService.check('identityProvider')) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.cookieService.set('identityProvider', this.identityProvider);
        this.login.login(this.identityProvider, function() {
          this.router.navigateByUrl('/messaging');
        }.bind(this));
      }, (reason) => {
        // If the modal is closed using the cross button or clicking out of it
      });
    }
  }

}
