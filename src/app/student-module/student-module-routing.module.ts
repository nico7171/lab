import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: 'addStudent', component: AddStudentComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'addStudent', pathMatch: 'full', outlet: "outlet1" },
  { path: '*', component: AddStudentComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StudentModuleRoutingModule {


  constructor(private router: Router) {
    this.router.navigate(['/addStudent']);
  }

}

