import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { TrainingService } from "services";
import { TrainingModel } from "../../models/training";

@Component({
    styleUrls: ["train.component.css"],
    templateUrl: 'train.component.html',
    selector: '<train></train>'
})
export class TrainComponent {

    @Input()
    public training: TrainingModel;

    @Output()
    public answerTest: EventEmitter<boolean> = new EventEmitter<boolean>();

    public hasAnswered: boolean;
    public selectedIndex: number;

    constructor(
        private router: Router,
    ) { 
        this.hasAnswered = false;
    }

    public get answers(): string[] {
        return this.training ? this.training.answers : [];
    }

    public get word(): string {
        return this.training ? this.training.word : "";
    }

    public trackByIndex(index: number, value: string): number {
        return index;
    }

    public answer(): void {
        this.hasAnswered = true;
        const isCorrect = this.selectedIndex === this.training.trueAnswer;
        this.answerTest.emit(isCorrect);
    }
    

}