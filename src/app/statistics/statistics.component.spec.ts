import {async, ComponentFixture, TestBed, tick} from "@angular/core/testing";
import {ChartsModule} from "ng2-charts";
import {StatisticsComponent} from "./statistics.component";
import {SharedModule} from "shared/*";
import {By} from "@angular/platform-browser";


const FAKE_RESULT = [
  {
    date: new Date(2018, 2, 20),
    result: 0,
    id: 1
  },
  {
    date: new Date(2018, 3, 10),
    result: 0.5,
    id: 2
  },
  {
    date: new Date(2018, 4, 1),
    result: 1,
    id: 3
  }
];

describe("StatisticsComponent", () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
      imports: [ChartsModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach((done) => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    component.result = FAKE_RESULT;
    fixture.detectChanges();
    done();
  });

  it("should create", (done) => {
    expect(component).toBeTruthy();
    done();
  });

  describe("Getters", () => {
    it("should return array of dates as lables", () => {
      const FAKE_LABELS = [
        (new Date(2018, 2, 20)).toISOString(),
        (new Date(2018, 3, 10)).toISOString(),
        (new Date(2018, 4, 1)).toISOString()
      ];
      expect(component.labels).toEqual(FAKE_LABELS);
    });
    it("should return array of results", () => {
      const FAKE_DATA = [{
        data: [0, 50, 100],
        label: "Результаты тестирования"
      }];
      expect(component.data).toEqual(FAKE_DATA);
    });
  });

  describe("Methods", () => {
    it("should action with current filters", () => {
      component.filter.startDate = new Date(2018, 3, 3);
      component.filter.endDate = new Date(2018, 4, 3);
      component.filter.minResult = 0.2;
      component.filter.maxResult = 0.5;

      spyOn(component.sendFilter, "emit");
      component.onSendFilter();

      expect(component.sendFilter.emit).toHaveBeenCalledWith({
        startDate: new Date(2018, 3, 3),
        endDate: new Date(2018, 4, 3),
        minResult: 0.2,
        maxResult: 0.5
      });
    });
  });


});
