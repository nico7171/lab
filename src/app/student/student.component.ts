import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //import Input Module

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @Output() outputAddStudent = new EventEmitter<any>(); //@Output decorate can output data from events.
  @Input() inputDefaultStudent: any; //@Input decorate can get outter data.

  constructor() {}

  ngOnInit(): void {
    console.log('@Input decorate can get outter data');
    console.log(this.inputDefaultStudent);
  }

  addStudent() {
    console.log('@Output decorate can send the data out');
    this.outputAddStudent.emit(this.inputDefaultStudent);
    this.inputDefaultStudent = { name: '', age: '' };
  }
}
