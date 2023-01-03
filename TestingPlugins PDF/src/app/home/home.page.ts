import { Component } from '@angular/core';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/File/ngx';
import { Platform } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform,private ft: FileTransfer, private file: File,
    private fileOpener: FileOpener, private document: DocumentViewer) {}

  openLocalPdf(){

    let filepath = this.file.applicationDirectory + 'www/assets';
    if(this.platform.is('android')){
        const fakeName = Date.now();
        this.file.copyFile(filepath,'5-tools.pdf', this.file.dataDirectory, `${fakeName}.pdf`)
          .then(result => {
            this.fileOpener.open(result.nativeURL, 'application/pdf');
          });
    }
    else{
      const opntions: DocumentViewerOptions = {
        title: 'My Pdf'
      }
      this.document.viewDocument(`${filepath}/5-tools.pdf`, `application/pdf`, opntions);
    }
  }

  downlodAndOpenPdf(){
    
    let downlodUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();

    transfer.download(downlodUrl , `${path}myfile.pdf`).then(entry => {
        let url = entry.toURL();
        if (this.platform.is('ios')){
          this.document.viewDocument(url, `application/pdf`, {});
        }
        else{
          this.fileOpener.open(url, 'application/pdf');
        }
      })
  }
}
