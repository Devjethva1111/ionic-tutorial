import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { Chooser, ChooserResult } from '@awesome-cordova-plugins/chooser/ngx';

@Component({
  selector: 'app-uploadpage',
  templateUrl: './uploadpage.page.html',
  styleUrls: ['./uploadpage.page.scss'],
})
export class UploadpagePage implements OnInit {

  returnpath:  string = 'none' ;
  currentFile: string = 'none';


  constructor(private fileChooser: Chooser, private filePath: FilePath,
      private toast: ToastController) { }

  ngOnInit() {
  }

  PickFile(){
    // this.fileChooser.open().then((fileuri) => {
    //   this.filePath.resolveNativePath(fileuri).then((resolvednativepath) => {
    //     this.returnpath = resolvednativepath;
    //   })
    // })

    this.fileChooser.getFile("image/jpeg").then((value: ChooserResult) => {
      console.log("File is Available", value);
      this.filePath.resolveNativePath(value.uri).then(async (resolvednativepath) => {
        console.log('Data is added',resolvednativepath );
        this.returnpath = resolvednativepath;
        
        let toast = this.toast.create({
          message: 'Data is added',
          duration: 3000,
          position: 'bottom'
        });
        (await toast).present();
      })
    })
  .catch((error: any) => console.error(error));


  }

  openChooser(){
    console.log('Opening chooser')
    this.fileChooser.getFile()
      .then(async (value: ChooserResult) => {
        console.log('File chosen: ', value); 
        this.currentFile = value.uri

        let toast = this.toast.create({
          message: 'Data is added',
          duration: 3000,
          position: 'bottom'
        });
        (await toast).present();
      })
      .catch(e => {
        console.log('Error choosing file: ', e);
      });
  }

  // async Openfile(){
  //   let toast = this.toast.create({
  //     message: 'Open File',
  //     duration: 3000,
  //     position: 'bottom'
  //   });
  //   (await toast).present();
  // }

}
