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

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, WarningAlertComponet, DataBindingComponent, DirectivesComponent],
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
