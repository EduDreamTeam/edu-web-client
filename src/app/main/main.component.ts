import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { UserModel } from "../models/user";
import { UserService } from "services";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  public user: Observable<UserModel>;

  constructor(private userService: UserService) { 
    this.user = this.userService.getUser();
  }

}
