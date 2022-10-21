import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  student = [
    { name: 'Nicole Tseng', id: '1', age: '10' },
    { name: 'Shawn Su', id: '2', age: '11' },
    { name: 'May Su', id: '3', age: '12' },
  ];

  newStudent: any = { name: 'Andy Lau', age: '20' };

  getNewStudentFromStudentComponent(newStudent: any) {
    console.log('input-output component');
    console.log(newStudent);
    this.student.push(newStudent);
  }
}
