import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPage } from './videos.page';

const routes: Routes = [
  {
    path: '',
    component: VideosPage
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  //Setting up dynamic route for the user to click on a playlist on the previous page and pass on the id of that playlist in the URL to the next page. Colon represents dynamic parameter. Different YouTube playlists (e.g. Pronoun, Probability, Noun etc) will obviously have different ids. (Dynamc paths must be below the hardcoded paths)
  {
    path: ':playlistId',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosPageRoutingModule {}
