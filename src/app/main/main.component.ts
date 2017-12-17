import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

import { UserModel } from "../models/user";
import { DictWordModel } from "../models/dict-word";
import { UserService, DictionaryService } from "services";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  public user: Observable<UserModel>;
  public words: Observable<DictWordModel>

  constructor(
    private userService: UserService,
    private router: Router,
    private dictionaryService: DictionaryService,
  ) { 
    this.user = this.userService.getUser();
    this.words = this.dictionaryService.getWords();
  }

  public addWord(): void {
    this.router.navigate(['/add-word']);
  }

}
