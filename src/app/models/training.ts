export class TrainingModel {
    public word: string;
    public answers: string[];
    public trueAnswer: number;

    constructor(obj?: Partial<TrainingModel>) {
        this.word = obj && obj.word || "";
        this.answers = obj && obj.answers || [];
        this.trueAnswer = obj && obj.trueAnswer || null;
    }
}
