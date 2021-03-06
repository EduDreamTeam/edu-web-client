import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {HttpModule, Http, RequestOptions, BaseRequestOptions} from "@angular/http";
import {provideAuth, AuthHttp, AuthConfig} from "angular2-jwt";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ChartsModule} from "ng2-charts";
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule
} from "@angular/material";

import 'hammerjs';


import {FlexLayoutModule} from "@angular/flex-layout";

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {LoginModule} from "./login/login.module";
import {AddWordModule} from "./add-word/add-word.module";
import {MainModule} from "./main/main.module";
import {AuthenticationService} from "./services";
import {UserService} from "./services";
import {SignUpModule} from "./sign-up/sign-up.module";
import {DictionaryService} from "./services";
import {TrainingModule} from "./training/training.module";
import {TrainingService} from "./services";
import {StatisticsService} from "./services";

import {fakeBackendProvider} from "./helpers";
import {StatisticsComponent} from "./statistics/statistics.component";
import {StatisticsContainer} from "./statistics/statistics.container";

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    StatisticsContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    LoginModule,
    MainModule,
    HttpModule,
    SignUpModule,
    AddWordModule,
    TrainingModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions,
    AuthHttp,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthenticationService,
    UserService,
    DictionaryService,
    TrainingService,
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: "Authorization",
    headerPrefix: "JWT",
    tokenName: "token",
    globalHeaders: [{"Content-Type": "application/json"}],
  }), http, options);
}


