import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
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

  public onSendFilter() {
    this.sendFilter.emit({
      startDate: this.filter.startDate,
      endDate: this.filter.endDate,
      minResult: this.filter.minResult,
      maxResult: this.filter.maxResult
    });
  }

}
