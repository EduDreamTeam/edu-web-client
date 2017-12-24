import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

import { AuthenticationService } from "services";

const APP_SERVER = "http://127.0.0.1:5000/";

@Component({
    styleUrls: ["login.component.css"],
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    public username: string;
    public password: string;
    public loading: boolean = false;
    public error: string = "";

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { 
            this.authenticationService.logout();
        }

    public signUp(): void {
        this.router.navigate(['/sign-up']);
    }

    public login(): void {
        this.authenticationService.login(this.username, this.password)
            .subscribe((data) => {
                // save the token in local storage
                let token = data.access_token;
                localStorage.setItem('token', token);
                this.router.navigate(['/main']);
            },
            (error) => {
              this.error = "Ошибка, попробуйте позднее.";
            });
    }
}