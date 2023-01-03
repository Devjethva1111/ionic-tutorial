import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {File} from '@ionic-native/File/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {DocumentViewer} from '@ionic-native/document-viewer/ngx'
import { FileOpener } from "@ionic-native/file-opener/ngx";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    File,FileTransfer,FileOpener, DocumentViewer],
  bootstrap: [AppComponent],
})
export class AppModule {}
