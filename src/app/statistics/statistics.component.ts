import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent {
  @Input()
  public result: any[];

  @Output()
  public sendFilter: EventEmitter<any> = new EventEmitter<any>();

  public filter: any;

  constructor() {
    this.filter = {
      startDate: new Date(2000, 0, 1),
      endDate: new Date(2019, 0, 1),
      minResult: 0,
      maxResult: 100
    };
  }

  public get labels() {
    return this.result.map(res => res.date.toISOString());
  }

  public get data() {
    return [{
      data: this.result.map(res => res.result * 100),
      label: "Результаты тестирования"
    }];
  }

  public get errorMessage() {
    if (!(this.filter.startDate instanceof Date) || isNaN(this.filter.startDate.getTime())) {
      return "Введите корректную дату начала";
    }

    if (!(this.filter.endDate instanceof Date) || isNaN(this.filter.endDate.getTime())) {
      return "Введите корректную дату конца";
    }
    if (this.filter.startDate.getTime() > this.filter.endDate.getTime()) {
      return "Дата начала не может быть больше даты конца";
    }
    if (!(Number.isInteger(this.filter.minResult) && this.filter.minResult >= 0 && this.filter.minResult / 100 <= 1)) {
      return "Введите корректный минимальный результат";
    }
    if (!(Number.isInteger(this.filter.maxResult) && this.filter.maxResult >= 0 && this.filter.maxResult / 100 <= 1)) {
      return "Введите корректный максимальный результат";
    }
    return "";
  }

  public get isInvalid() {
    console.log(this.errorMessage)
    console.log(this.errorMessage.length)
    return this.errorMessage.length;
  }

  public onSendFilter() {
    if (this.isInvalid) {
      return;
    }
    this.sendFilter.emit({
      startDate: this.filter.startDate,
      endDate: this.filter.endDate,
      minResult: this.filter.minResult / 100,
      maxResult: this.filter.maxResult / 100
    });
  }
}
