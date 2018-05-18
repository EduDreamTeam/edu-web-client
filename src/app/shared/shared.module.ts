import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule,
  MatToolbarModule
} from "@angular/material";

import {
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

const FORMS_MODULES = [
  FormsModule,
  ReactiveFormsModule,
];

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule,
  MatToolbarModule
];

@NgModule({
  exports: [
    CommonModule,
    ...FORMS_MODULES,
    FlexLayoutModule,
    ...MATERIAL_MODULES,
  ],
  imports: [
    CommonModule,
    ...FORMS_MODULES,
    FlexLayoutModule,
    ...MATERIAL_MODULES,
  ],
})
export class SharedModule {
}
