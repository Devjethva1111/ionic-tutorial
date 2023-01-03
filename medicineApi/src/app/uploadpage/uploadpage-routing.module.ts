import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadpagePage } from './uploadpage.page';

const routes: Routes = [
  {
    path: '',
    component: UploadpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadpagePageRoutingModule {}
