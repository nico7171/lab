import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss'],
})
export class HooksComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('OnInit.....');
  }

  ngOnChanges() {
    console.log('OnChanges.....');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit.....');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked.....');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit.....');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked.....');
  }
}
