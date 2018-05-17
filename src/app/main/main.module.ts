import {NgModule} from "@angular/core";

import {SharedModule} from "shared";
import {MainComponent} from "./main.component";

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class MainModule {
}
