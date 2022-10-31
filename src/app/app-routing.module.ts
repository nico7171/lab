import { FormsComponent } from './forms/forms.component';
import { ObservableComponent } from './observable/observable.component';
import { RoutersComponent } from './routers/routers.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './hooks/hooks.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '*', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'link1', component: SuccessAlertComponent, pathMatch: 'full' },
  { path: 'link2', component: DataBindingComponent, pathMatch: 'full' },
  { path: 'link3', component: DirectivesComponent, pathMatch: 'full' },
  { path: 'link4', component: InputOutputComponent, pathMatch: 'full' },
  { path: 'link5', component: HooksComponent, pathMatch: 'full' },
  // { path: 'link6', component: RoutersComponent, pathMatch: 'full' },
  {
    path: 'link6',
    component: RoutersComponent,
    children: [
      {
        path: 'child1',
        component: SuccessAlertComponent,
        // children: [
        //     {
        //         path: 'api-dashboard',
        //         component: ApiHomeDashboardComponent
        //     }]
      },
      {
        path: 'child2',
        component: DataBindingComponent,
      },
    ],
  },
  { path: 'link6a/:id/:name', component: RoutersComponent, pathMatch: 'full' },
  { path: 'link7', component: ObservableComponent, pathMatch: 'full' },
  { path: 'link8', component: FormsComponent, pathMatch: 'full' },
  { path: 'link9', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
