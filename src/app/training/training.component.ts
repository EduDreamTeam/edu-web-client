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
    public result: boolean[];
    public selectedIndex: string;

    constructor(
        private router: Router,
        private trainingService: TrainingService,
    ) { 
        this.trainingService.get().subscribe();
        this.trainigList$ = this.trainingService.get();
        this.result = [];
    }

    public trackByIndex(index: number, value: string): number {
        return index;
    }

    public answerTest(isCorrect): void {
        this.result.push(isCorrect);
    }

    public get all(): number {
        return this.result.length;
    }

    public get correct(): number {
        return this.result.filter(res => res).length;
    }

}