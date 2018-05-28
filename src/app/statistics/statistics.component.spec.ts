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

const givenCorrectlyConfigured = (component) => {
  component.filter.startDate = new Date(2018, 3, 3);
  component.filter.endDate = new Date(2018, 4, 3);
  component.filter.minResult = 40;
  component.filter.maxResult = 50;
}

const givenTooBigMaxResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = new Date(2019, 0, 1);
  component.filter.minResult = 0;
  component.filter.maxResult = 101;
}

const givenTooSmallMaxResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = new Date(2019, 0, 1);
  component.filter.minResult = 0;
  component.filter.maxResult = -4;
}

const givenNotIntMaxResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = new Date(2019, 0, 1);
  component.filter.minResult = 0;
  component.filter.maxResult = "bad";
}

const givenTooBigMinResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = new Date(2019, 0, 1);
  component.filter.minResult = 101;
  component.filter.maxResult = 50;
}

const givenTooSmallMinResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = new Date(2019, 0, 1);
  component.filter.minResult = -3;
  component.filter.maxResult = -19;
}

const givenNotIntMinResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = new Date(2019, 0, 1);
  component.filter.minResult = "bad";
  component.filter.maxResult = 50;
}

const givenStartBiggerThanEndConfigured = (component) => {
  component.filter.startDate = new Date(2019, 0, 1);
  component.filter.endDate = new Date(2000, 0, 1);
  component.filter.minResult = 1;
  component.filter.maxResult = 50;
}

const givenNotIntEndDateResultConfigured = (component) => {
  component.filter.startDate = new Date(2000, 0, 1);
  component.filter.endDate = "bad";
  component.filter.minResult = 0;
  component.filter.maxResult = 50;
}

const givenNotIntStartDateResultConfigured = (component) => {
  component.filter.startDate = "bad";
  component.filter.endDate =  new Date(2000, 0, 1);
  component.filter.minResult = 0;
  component.filter.maxResult = 50;
}

const whenSearchIsInvoked = (component) => {
  spyOn(component.sendFilter, "emit");
  component.onSendFilter();
}

const thenSearchRequestSentToServer = (component) => {
  expect(component.sendFilter.emit).toHaveBeenCalledWith({
    startDate: new Date(2018, 3, 3),
    endDate: new Date(2018, 4, 3),
    minResult: 0.4,
    maxResult: 0.5
  });
}

const thenErrorMessageMaxResultCalculate =(component) => {
  expect(component.errorMessage).toEqual("Введите корректный максимальный результат");
}

const thenErrorMessageMinResultCalculate =(component) => {
  expect(component.errorMessage).toEqual("Введите корректный минимальный результат");
}

const thenErrorMessageStartEndDateCalculate = (component) => {
  expect(component.errorMessage).toEqual("Дата начала не может быть больше даты конца");
}

const thenErrorMessageEndDateCalculate = (component) => {
  expect(component.errorMessage).toEqual("Введите корректную дату конца");
}

const thenErrorMessageStartDateCalculate = (component) => {
  expect(component.errorMessage).toEqual("Введите корректную дату начала");
}

const thenErrorMessageEmptyCalculate = (component) => {
  expect(component.errorMessage).toEqual("");
}

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
        "20-2-2018",
        "10-3-2018",
        "1-4-2018"
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

    it("ErrorMessage: should return empty string", () => {
      givenCorrectlyConfigured(component);
      thenErrorMessageEmptyCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректную дату начала'", () => {
      givenNotIntStartDateResultConfigured(component)
      thenErrorMessageStartDateCalculate(component)
    });

    it("ErrorMessage: should return 'Введите корректную дату конца'", () => {
      givenNotIntEndDateResultConfigured(component);
      thenErrorMessageEndDateCalculate(component);
    });

    it("ErrorMessage: should return 'Дата начала не может быть больше даты конца'", () => {
      givenStartBiggerThanEndConfigured(component);
      thenErrorMessageStartEndDateCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректный минимальный результат'", () => {
      givenNotIntMinResultConfigured(component);
      thenErrorMessageMinResultCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректный минимальный результат'", () => {
      givenTooSmallMinResultConfigured(component);
      thenErrorMessageMinResultCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректный минимальный результат'", () => {
      givenTooBigMinResultConfigured(component);
      thenErrorMessageMinResultCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректный максимальный результат'", () => {
      givenNotIntMaxResultConfigured(component);
      thenErrorMessageMaxResultCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректный максимальный результат'", () => {
      givenTooSmallMaxResultConfigured(component);
      thenErrorMessageMaxResultCalculate(component);
    });

    it("ErrorMessage: should return 'Введите корректный максимальный результат'", () => {
      givenTooBigMaxResultConfigured(component);
      thenErrorMessageMaxResultCalculate(component);
    });
  });

  describe("Methods", () => {
    it("should action with current filters", () => {
      givenCorrectlyConfigured(component);
      whenSearchIsInvoked(component);
      thenSearchRequestSentToServer(component);
    });
  });


});
