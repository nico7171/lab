import { Component } from '@angular/core';
import { UploadService } from './service/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My';
  filePath : string = "";
  fileName : string = "";
  file : any;
  formData = new FormData();

  constructor(
    private uploadService: UploadService
  ){
  
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
    if(this.file){
      this.fileName = this.file.name;
      this.formData.append('file', this.file, this.fileName);
    }
  }
  
  upload() {
    if (this.file) {
      this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

}
