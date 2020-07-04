import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPackagePage } from './test-package.page';

const routes: Routes = [
  {
    path: '',
    component: TestPackagePage
  },
  {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPackagePageRoutingModule {}
