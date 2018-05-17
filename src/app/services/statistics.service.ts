import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

const APP_SERVER = "http://127.0.0.1:5000/";

@Injectable()
export class DictionaryService {
  public jwtHelper;

  constructor(private http: Http) {
    this.jwtHelper = new JwtHelper();
  }

  private randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  public setStatistics(result): Observable<void> {
    const token = localStorage.getItem("token");
    const options: RequestOptions = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`
      })
    });
    const path = `${APP_SERVER}statistics`;
    return this.http.post(path, result, options)
      .map((response: Response) => response.json())
      .catch((error: Error) => Observable.throw("Server error"));
  }

  public getStatistics(data: {startDate, endDate, minResult, maxResult}): Observable<any> {
    const token = localStorage.getItem("token");
    const params = `?startDate=${data.startDate}
      &endDate=${data.endDate}
      &minResult=${data.minResult}
      &maxResult=${data.maxResult}`;
    const options: RequestOptions = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`
      })
    });
    const path = `${APP_SERVER}statistics?${params}`;
    const fakeResult = new Array(5);
    fakeResult.fill({
      date: this.randomDate(new Date(2018, 4, 1), new Date()),
      result: Math.random(),
      userId: 1,
      id: 1
    });
    return Observable.of(fakeResult);
    /* return this.http.get(path, options)
      .map((response: Response) => response.json())
      .catch((error: Error) => Observable.throw("Server error"));*/
  }
}
