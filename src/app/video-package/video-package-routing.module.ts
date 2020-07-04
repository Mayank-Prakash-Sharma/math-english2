import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPackagePage } from './video-package.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPackagePage
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoPackagePageRoutingModule {}
