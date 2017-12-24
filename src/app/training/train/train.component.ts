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
    @Output()
    public answerTest: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input()
    public result: boolean[];

    @Output()
    public nextClick: EventEmitter<void> = new EventEmitter<void>();

    @Input()
    public questions: Array<TrainingModel>;

    @Input()
    public index:number;

    public hasAnswered: boolean;
    public selectedIndex: number;

    constructor(
        private router: Router,
    ) { 
        this.hasAnswered = false;
    }

    public get training(): TrainingModel {
        return this.questions ? this.questions[this.index] : new TrainingModel();
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

    public get hasNext(): boolean {
        return this.hasAnswered && this.questions && this.index < this.questions.length - 1;
    }

    public get isLastQuestion(): boolean {
        return this.hasAnswered && this.questions && this.index === this.questions.length-1;
    }

    public get hasFinished(): boolean {
        return this.questions && this.index >= this.questions.length;
    }

    public get trueIndex(): number {
        return this.training && this.training.trueAnswer;
    }

    public get all(): number {
        return this.result.length;
    }

    public get correct(): number {
        return this.result.filter(res => res).length;
    }

    public get isExcellant(): boolean {
        return this.all === this.correct;
    }

    public get isGood(): boolean {
        return  !this.isExcellant && (this.correct /this.all) > 0.5 ;
    }

    public get isBad(): boolean {
        return (this.correct /this.all) <= 0.5 ;
    }

    public onSelect(value: number) {
        console.log(value);
        this.selectedIndex = value;
    }

    public answer(): void {
        this.hasAnswered = true;
        const isCorrect = this.selectedIndex === this.training.trueAnswer;
        this.answerTest.emit(isCorrect);
    }
    
    public onNextClick(): void {
        this.hasAnswered = false;
        this.selectedIndex = null;
        this.nextClick.emit();
    }

}