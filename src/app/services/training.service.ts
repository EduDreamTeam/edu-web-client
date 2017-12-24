import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TrainingModel } from "../models/training";

const APP_SERVER = "http://127.0.0.1:5000/";

@Injectable()
export class TrainingService {

    constructor(private http: Http) {}

    public get(): Observable<TrainingModel[]> {
        const token = localStorage.getItem('token');
        const options: RequestOptions = new RequestOptions({
            headers: new Headers({ 
                'Content-Type': 'application/json',
                Authorization: `JWT ${token}`
            })
        });
        const path = `${APP_SERVER}task`;
        return this.http.get(path, options)
            .map((response: Response) => response.json())
            .catch((error: Error) => Observable.throw('Server error'));
    }
}