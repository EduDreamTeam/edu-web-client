import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { DictionaryService } from "services";

@Component({
    styleUrls: ["add-word.component.css"],
    templateUrl: 'add-word.component.html',
})
export class AddWordComponent {
    public word: string;
    public translateList: string[];
    public error: string;

    constructor(
        private router: Router,
        private dictionaryService: DictionaryService,
    ) { 
        this.translateList = ['']
    }

    public addTranslate(): void {
        this.translateList.push('');
    }

    public addWord(): void {
        console.log(this.word, this.translateList);
        this.dictionaryService.addWord({
            word: this.word, 
            translate: this.translateList
        }).subscribe(() => {
            this.translateList = [''];
            this.word = '';
        },
        (error) => {
          this.error = "Ошибка, попробуйте позднее.";
        });
    }

    public trackByIndex(index: number, value: string): number {
        return index;
    }

    public onValueUpdate(event, index): void {
        this.translateList[index] = event.target.value;
    }
}