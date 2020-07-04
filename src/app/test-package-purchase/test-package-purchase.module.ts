import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPackagePurchasePageRoutingModule } from './test-package-purchase-routing.module';

import { TestPackagePurchasePage } from './test-package-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPackagePurchasePageRoutingModule
  ],
  declarations: [TestPackagePurchasePage]
})
export class TestPackagePurchasePageModule {}
