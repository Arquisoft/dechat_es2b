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
  username;
  password;

  constructor(private modalService: NgbModal, private login: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['access_token'] != null) {
        this.login.login(this.identityProvider, function() {
          this.router.navigateByUrl('/messaging');
        }.bind(this));
      }
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.login.login(this.identityProvider, function() {
        this.router.navigateByUrl('/messaging');
      }.bind(this));
    }, (reason) => {
      // If the modal is closed using the cross button or clicking out of it
    });
  }

}
