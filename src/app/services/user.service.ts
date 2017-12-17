import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserModel } from "../models/user";

const APP_SERVER = "http://127.0.0.1:5000/";

@Injectable()
export class UserService {
    public jwtHelper
    constructor(private http: Http) {
        this.jwtHelper = new JwtHelper();
    }

    public getUser(): Observable<UserModel> {
        const token = localStorage.getItem('token');
        console.log(token)
        const options: RequestOptions = new RequestOptions({
            headers: new Headers({ 
                'Content-Type': 'application/json',
                Authorization: `JWT ${token}`
            })
        });
        const path = `${APP_SERVER}userinfo`;
        return this.http.get(path, options)
            .map((response: Response) => response.json())
            .catch((error: Error) => Observable.throw('Server error'));

        // return Observable.of({
        //     id: 1,
        //     firstName: "Nataly",
        //     lastName: "Belyaeva",
        //     login: "login",
        //     email: "email"
        // } as UserModel)
    }
}