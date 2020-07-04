// This routing file will have my tabs routes

import { NgModule } from "@angular/core";
//Import RouterModule and Routes
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

// Adding tab routes (it's basically an array of routing objects)
const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,   //Need to import this component
    //The following will be the children routes of tabs, i.e. the pages that will open on clicking the tabs.
    children: [
      {
        path: 'test-package',  //Must be the same name as the identifier of this tab in html file where tabs are. 
        children:[
          {
            path: '',
            loadChildren: () => import('../test-package/test-package.module').then( m => m.TestPackagePageModule)
          },
          {
            path: ':examId',  //Colon represents dynamic parameter. Will pass this id as a parameter in the URL. Different exams (e.g. SSC CGL, SSC CHSL, Bank IBPS, Bank SBI) will have different ids. (Dynamc paths must be below the hardcoded paths)
            loadChildren: () => import('../test-package/tests/tests.module').then( m => m.TestsPageModule)
          }
        ]
      },
      {
        path: 'home-package', //Must be the same name as the identifier of this tab in html file where tabs are. 
        children: [
          {
            path: '',
            loadChildren: () => import('../home-package/home-package.module').then( m => m.HomePackagePageModule)
          } 
        ]
      },
      {
        path: 'video-package', //Must be the same name as the identifier of this tab in html file where tabs are. 
        children: [
          {
            path: '',
            loadChildren: () => import('../video-package/video-package.module').then( m => m.VideoPackagePageModule)
          },
          {
            path: ':subjectId',  //Colon represents dynamic parameter. Will pass this id as a parameter in the URL. Different subjects (e.g. English, Arithmetic, Higher Maths) will have different ids. (Dynamc paths must be below the hardcoded paths)
            loadChildren: () => import('../video-package/videos/videos.module').then( m => m.VideosPageModule)
          }
        ]
      },
      {
        //Adding this path to redirect the user if he enters domain.com/tabs. He will be redirected to domain.com/tabs/home-package
        path: '',
        redirectTo: '/tabs/home-package',
        pathMatch: 'full'
      }
    ]
  },
  {
    //Adding this path to redirect the user if he enters domain.com. He will be redirected to domain.com/tabs/home-package
    path: '',
    redirectTo: '/tabs/home-package',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
