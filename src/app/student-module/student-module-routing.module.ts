import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

// import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'addStudent', component: StudentComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'addStudent', pathMatch: 'full', outlet: "outlet1" },
  { path: '*', redirectTo: 'addStudent', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StudentModuleRoutingModule {


  // constructor(private router: Router) {
  //   this.router.navigate(['/addStudent']);
  // }

}

