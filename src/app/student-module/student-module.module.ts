import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule } from './student-module-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentModuleRoutingModule
  ]
})
export class StudentModuleModule { }
