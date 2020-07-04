import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPackagePurchasePage } from './video-package-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPackagePurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoPackagePurchasePageRoutingModule {}
