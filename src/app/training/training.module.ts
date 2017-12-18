import { NgModule } from '@angular/core';

import { SharedModule } from "shared";
import { TrainingComponent } from './training.component';
import { TrainComponent } from './train/train.component';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class TrainingModule { }
