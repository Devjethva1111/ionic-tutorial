import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadpagePageRoutingModule } from './uploadpage-routing.module';

import { UploadpagePage } from './uploadpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadpagePageRoutingModule
  ],
  declarations: [UploadpagePage]
})
export class UploadpagePageModule {}
