import { Component, OnInit, Input, Output, EventEmitter, Injectable, ChangeDetectionStrategy, NgModule } from '@angular/core'; //import Input Module
import { TitleStrategy } from '@angular/router';
import { Student } from '../model/student.model';
import { studentService } from '../service/student.service';
import { FormControl, FormGroup } from '@angular/forms'
import { interval, Observable } from 'rxjs';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush //11-01
})

// @NgModule({ imports: [BrowserAnimationsModule], })
export class StudentComponent implements OnInit {
  // @Output() outputAddStudent = new EventEmitter<any>(); //@Output decorate can output data from events.
  // @Input() inputDefaultStudent: any; //@Input decorate can get outter data.

  stuGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  });

  // stuService : studentService;
  stuList: any[] = [];
  students$: Observable<Student[]> //11-01

  constructor(private stuService: studentService) {
    //this.stuService = stuService;

  }

  ngOnInit(): void {
    // console.log('@Input decorate can get outter data');
    // console.log(this.inputDefaultStudent);
    //this.stuList = this.stuService.getStudent();
    this.students$ = this.stuService.students$;
    console.log(this.stuList);
  }

  addStudent() {
    // console.log('@Output decorate can send the data out');
    // this.outputAddStudent.emit(this.inputDefaultStudent);
    // this.inputDefaultStudent = { name: '', age: '' };

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


