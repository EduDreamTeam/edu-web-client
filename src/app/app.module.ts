import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions, BaseRequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { 
  MatToolbarModule,
  MatButtonModule,
 } from '@angular/material';
 import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';
import { AddWordModule } from "./add-word/add-word.module";
import { MainModule } from "./main/main.module";
import { AuthenticationService } from './services';
import { UserService } from './services';
import { SignUpModule } from './sign-up/sign-up.module';
import { DictionaryService } from "./services";
import { TrainingModule } from "./training/training.module";
import { TrainingService } from "./services";

import { fakeBackendProvider } from "./helpers";

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
       return new AuthHttp(new AuthConfig({
          headerName: 'Authorization',
          headerPrefix: 'JWT',
          tokenName: 'token',
          globalHeaders: [{'Content-Type': 'application/json'}],
      }), http, options);
    }


