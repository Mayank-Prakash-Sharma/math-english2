import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPackagePageRoutingModule } from './video-package-routing.module';

import { VideoPackagePage } from './video-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPackagePageRoutingModule
  ],
  declarations: [VideoPackagePage]
})
export class VideoPackagePageModule {}
