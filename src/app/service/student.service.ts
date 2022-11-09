import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class studentService {
  [x: string]: any;

  // name!: string;
  // age!: number;
  // getName!: (name: string) => string;



  // getAge!: (age: number) => number;
  student: Student[] = [{
    name: "Andy", birthday: null, gender: "m", address: "this is my address", phone: "012345689", email: "andy@gmail.com"
  }];

  //11-01
  students: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  students$: Observable<Student[]>

  constructor() {
    this.students$ = this.students.asObservable();
  }

  //service no need onInit method
  // ngOnInit(): void {
  // }

  public addStudent(sList: Student) {
    // this.student.push(sList);
    this.students.next([...this.students.getValue(), sList])
  }

  public getStudent() {
    return this.student;
  }

  // const observable = new Observable((subscriber) => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 1000);
  // });

}