import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from "services";
import { RegistrationModel } from "../models/registration";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

    public firstname: string;
    public lastname: string;
    public login: string;
    public email: string;
    public password: string;
    public confirmPassword: string;

    public error: string;
    

    public signUp(): void {
      this.authenticationService.signUp({
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        login: this.login,
        password: this.password,
      } as RegistrationModel).subscribe((data) => {
          console.log(data);
          this.router.navigate(['login']);;
      },
      (error) => {
        this.error = "Ошибка, попробуйте позднее";
      });
        
    }
}
