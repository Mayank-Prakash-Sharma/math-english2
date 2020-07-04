import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPackagePageRoutingModule } from './test-package-routing.module';

import { TestPackagePage } from './test-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPackagePageRoutingModule
  ],
  declarations: [TestPackagePage]
})
export class TestPackagePageModule {}
