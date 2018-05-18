import {Component} from "@angular/core";
import {StatisticsService} from "services/*";
import {Observable} from "rxjs/Observable";


@Component({
  selector: "app-statistics-container",
  template: "<app-statistics [result]='result$ | async' (sendFilter)='onSendFilter($event)'></app-statistics>"
})
export class StatisticsContainer {
  public result$: Observable<any[]>;

  constructor(private statisticsService: StatisticsService) {
    this.onSendFilter(
      {
        startDate: new Date(2000, 0, 1),
        endDate: new Date(2019, 0, 1),
        minResult: 0,
        maxResult: 100
      });
  }

  public onSendFilter(filter) {
    this.result$ = this.statisticsService.getStatistics(filter);
  }
}
