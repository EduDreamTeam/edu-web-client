import {NgModule} from "@angular/core";

import {SharedModule} from "../shared";
import {SignUpComponent} from "./sign-up.component";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class SignUpModule {
}
