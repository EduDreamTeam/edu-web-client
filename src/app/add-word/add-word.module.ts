import { NgModule } from '@angular/core';

import { SharedModule } from "shared";
import { AddWordComponent } from './add-word.component';

@NgModule({
  declarations: [
    AddWordComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class AddWordModule { }
