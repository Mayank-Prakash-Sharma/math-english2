import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePackagePage } from './home-package.page';

const routes: Routes = [
  {
    path: '',
    component: HomePackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePackagePageRoutingModule {}
