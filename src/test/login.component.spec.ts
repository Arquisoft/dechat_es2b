import {LoginComponent} from '../app/login/login.component';
import {AuthService} from '../app/services/solid.auth.service';
import {RdfService} from '../app/services/rdf.service';
import {Route, Router} from '@angular/router';
import {AuthGuard} from '../app/services/auth.guard.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Test} from 'tslint';

describe('login', () => {
    let authGuard: AuthGuard;
    let loginComponent: LoginComponent;
    let fixtureLog: ComponentFixture<LoginComponent>;
    let fixtureAuth: ComponentFixture<AuthGuard>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, AuthGuard]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixtureLog = TestBed.createComponent(LoginComponent);
        fixtureAuth = TestBed.createComponent(AuthGuard);
        authGuard = fixtureAuth.componentInstance;
        loginComponent = fixtureLog.componentInstance;
        fixtureAuth.detectChanges();
        fixtureLog.detectChanges();
    });

    it('should create', () => {
        expect(authGuard).toBeTruthy();
    });
    it('should create', () => {
        expect(loginComponent).toBeTruthy();
    });
});
