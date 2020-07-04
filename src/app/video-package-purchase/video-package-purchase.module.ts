import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPackagePurchasePageRoutingModule } from './video-package-purchase-routing.module';

import { VideoPackagePurchasePage } from './video-package-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPackagePurchasePageRoutingModule
  ],
  declarations: [VideoPackagePurchasePage]
})
export class VideoPackagePurchasePageModule {}
