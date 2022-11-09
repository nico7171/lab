import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule } from './student-module-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';

import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    StudentComponent,
  ],
  imports: [
    CommonModule,
    StudentModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class StudentModuleModule { }
