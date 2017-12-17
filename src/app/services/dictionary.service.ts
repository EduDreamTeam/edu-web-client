import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DictWordModel } from "../models/dict-word";

const APP_SERVER = "http://127.0.0.1:5000/";

@Injectable()
export class DictionaryService {
    public jwtHelper
    constructor(private http: Http) {
        this.jwtHelper = new JwtHelper();
    }

    public addWord(wordModel: DictWordModel): Observable<void> {
        const token = localStorage.getItem('token');
        console.log(token)
        const options: RequestOptions = new RequestOptions({
            headers: new Headers({ 
                'Content-Type': 'application/json',
                Authorization: `JWT ${token}`
            })
        });
        const path = `${APP_SERVER}dict`;
        return this.http.put(path, JSON.stringify(wordModel), options)
            .map((response: Response) => response.json())
            .catch((error: Error) => Observable.throw('Server error'));
    }

    public getWords(): Observable<DictWordModel> {
        const token = localStorage.getItem('token');
        console.log(token)
        const options: RequestOptions = new RequestOptions({
            headers: new Headers({ 
                'Content-Type': 'application/json',
                Authorization: `JWT ${token}`
            })
        });
        const path = `${APP_SERVER}dict`;
        return this.http.get(path, options)
            .map((response: Response) => {
                const res = response.json();
                
                return Object.keys(res).map((key) => { 
                    return {word: key, translate: res[key]};
                })

            })
            .catch((error: Error) => Observable.throw('Server error'));
    }
}