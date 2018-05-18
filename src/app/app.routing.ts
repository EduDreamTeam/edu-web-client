import {Routes, RouterModule} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AddWordComponent} from "./add-word/add-word.component";
import {TrainingComponent} from "./training/training.component";
import {StatisticsContainer} from "./statistics/statistics.container";

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "main",
    component: MainComponent,
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "add-word",
    component: AddWordComponent,
  },
  {
    path: "training",
    component: TrainingComponent,
  },
  {
    path: "statistics",
    component: StatisticsContainer
  }
];

export const routing = RouterModule.forRoot(appRoutes);
