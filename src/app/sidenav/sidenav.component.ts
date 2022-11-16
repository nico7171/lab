import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  //shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host); //sidenav

  constructor() { }

  ngOnInit(): void {
  }

}
