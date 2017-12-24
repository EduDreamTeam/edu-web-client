import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { TrainingService } from "services";
import { TrainingModel } from "../models/training";

@Component({
    styleUrls: ["training.component.css"],
    templateUrl: 'training.component.html',
})
export class TrainingComponent {

    public trainigList$: Observable<TrainingModel[]>;
    public currentIndex: number;
    public result: boolean[];
    public selectedIndex: string;

    constructor(
        private router: Router,
        private trainingService: TrainingService,
    ) { 
        this.trainigList$ = this.trainingService.get();
        this.result = [];
        this.currentIndex = 0;
    }

    public trackByIndex(index: number, value: string): number {
        return index;
    }

    public answerTest(isCorrect): void {
        this.result.push(isCorrect);
    }

    public onNextClick(): void {
        this.currentIndex++;
    }
}