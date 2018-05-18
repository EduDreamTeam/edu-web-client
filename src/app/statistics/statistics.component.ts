import {Component, Input} from "@angular/core";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent {
  @Input()
  public result: any[];


  public get labels() {
    return this.result.map(res => res.date.toISOString());
  }

  public get data() {
    return [{
      data: this.result.map(res => res.result * 100),
      label: "Результаты тестирования"
    }];
  }

}
