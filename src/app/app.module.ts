import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponet } from './warning-alert/warning-alert.components';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { StudentComponent } from './student/student.component';
import { HooksComponent } from './hooks/hooks.component';
import { RoutersComponent } from './routers/routers.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, WarningAlertComponet, DataBindingComponent, DirectivesComponent, HomeComponent, InputOutputComponent, StudentComponent, HooksComponent, RoutersComponent, ObservableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // required for input file change detection
    ReactiveFormsModule,
    HttpClientModule, // this is required for the actual http request
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
