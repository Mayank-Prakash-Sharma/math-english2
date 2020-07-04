import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePackagePageRoutingModule } from './home-package-routing.module';

import { HomePackagePage } from './home-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePackagePageRoutingModule
  ],
  declarations: [HomePackagePage]
})
export class HomePackagePageModule {}
