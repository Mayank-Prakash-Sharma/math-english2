import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

// Import and inject Service having my packages and data model class
import { VideoPackageService } from '../video-package.service';
import { VideoPackages } from '../video-package.model';

// Import and inject Service having my playlists and data model class
import { VideosService } from './videos.service';
import { Playlist } from './videos.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  //For storing the data of the playlists
  loadedPlaylists: Playlist[];
  freePlaylists: Playlist[];

  //For storing the data of the dynamic subject Id passed from the previous page
  loadedVideoPackage: VideoPackages;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private videoPackageService: VideoPackageService, private videosService: VideosService) { }

  ngOnInit() {
        
      //Using the dynamic attribute (subjectId) passed from the previous page and storing it in a local variable. Subscribe is always active and not only when page is visible (so we could also have written it outside ngOnInit) 
      this.route.paramMap.subscribe(paramMap => {
      //Adding an If check for scenarios where no dynamic attribute has been passed
      if (!paramMap.has('subjectId')) {
        this.navCtrl.navigateBack('/tabs/video-package');
        return;
      }
      //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
      this.loadedVideoPackage = this.videoPackageService.accessSubjectId(paramMap.get('subjectId'));
      //Setting the value of the loadedVideoPackage1 object in .service.ts file to be the same as loadedVideoPackage
      this.videosService.loadedVideoPackage1 = this.loadedVideoPackage;  
    });  

    //Load the appropriate playlists based on the dynamic subject id passed from the last page
    if (this.loadedVideoPackage.id === 'subject1') {
    this.loadedPlaylists = this.videosService.freeEnglishPlaylists; 
    console.log("ngoninit fired");
    } else if (this.loadedVideoPackage.id === 'subject2') {
      this.loadedPlaylists = this.videosService.freeArithmeticPlaylists; 
      console.log("ngoninit fired");
    } else if (this.loadedVideoPackage.id === 'subject3') {
      this.loadedPlaylists = this.videosService.freeHigherMathsPlaylists; 
      console.log("ngoninit fired");
    }

  }

}
