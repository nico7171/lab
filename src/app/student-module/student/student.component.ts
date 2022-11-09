import { Component, OnInit, NgModule } from '@angular/core';
import { Student } from '../../model/student.model';
import { studentService } from '../../service/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { interval, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [DatePipe]
})

export class StudentComponent implements OnInit {

  stuGroup = new FormGroup({
    name: new FormControl(''),
    birthday: new FormControl(),
    gender: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  // stuService : studentService;
  stuList: any[] = [];
  students$: Observable<Student[]> //11-01
  columnsToDisplay = ['name', 'birthday', 'gender', 'address', 'phone', 'email']; //todo
  stuDataSource = new MatTableDataSource<any>();

  constructor(private stuService: studentService) {
    //this.stuService = stuService;

  }

  ngOnInit(): void {
    //this.stuList = this.stuService.getStudent();
    this.students$ = this.stuService.students$;
    console.log(this.stuList);

  }

  addStudent() {
    // const newName: string = !this.stuGroup.value.name ? "" : this.stuGroup.value.name
    // const newAge: number = !this.stuGroup.value.age ? 0 : Number(this.stuGroup.value.age)
    // const newStudent: any = !this.stuGroup.value ? { name: '', age: '' } : this.stuGroup.value
    // this.stuService.addStudent(newStudent);
    console.log(this.stuGroup.getRawValue())
    this.stuService.addStudent(this.stuGroup.getRawValue());
  }

  // getNewStudentFromStudentComponent(newStudent: any) {
  //   console.log('input-output component');
  //   console.log(newStudent);
  //   this.student.push(newStudent);
  // }

}


