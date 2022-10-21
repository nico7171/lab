import { InputOutputComponent } from './input-output/input-output.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '*', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'link1', component: SuccessAlertComponent, pathMatch: 'full' },
  { path: 'link2', component: DataBindingComponent, pathMatch: 'full' },
  { path: 'link3', component: DirectivesComponent, pathMatch: 'full' },
  { path: 'link4', component: InputOutputComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
