import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ChartsModule} from "ng2-charts";
import {StatisticsComponent} from "./statistics.component";
import {SharedModule} from "shared/*";

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
});
