export class DictWordModel {
    public word: string;
    public translate: string[];

    constructor(obj?: Partial<DictWordModel>) {
        this.word = obj && obj.word || "";
        this.translate = obj && obj.translate || [];
    }
}
