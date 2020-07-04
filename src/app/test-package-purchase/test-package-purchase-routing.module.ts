import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPackagePurchasePage } from './test-package-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: TestPackagePurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPackagePurchasePageRoutingModule {}
