import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My';
  filePath : string = "";
  fileName : string = "";
  // file : any;

  fileSelected(event : any){
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    if(file){
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file); //增加檔案
    }
  }

  // fileUpload(){
    
  // }

  download(){

  }

  delete(){
    
  }

}
