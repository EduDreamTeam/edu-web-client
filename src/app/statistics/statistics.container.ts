import {Component} from "@angular/core";
import {StatisticsService} from "services/*";
import {Observable} from "rxjs/Observable";


@Component({
  selector: "app-statistics-container",
  template: "<app-statistics [result]='result$ | async'></app-statistics>"
})
export class StatisticsContainer {
  public result$: Observable<any[]>;

  constructor(private statisticsService: StatisticsService) {
    this.result$ = this.statisticsService.getStatistics(
      {startDate: null, endDate: null, minResult: null, maxResult: null});
  }
}
