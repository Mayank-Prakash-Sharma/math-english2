import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

// Import and inject Service having my playlists and data model class
import { VideosService } from '../videos.service';
import { Playlist } from '../videos.model';

// Import and inject Service having my function that will retrieve the videos from the selected playlist
import { VideoService } from './video.service';

//Import Observable
import { Observable } from 'rxjs';

//import DomSanitizer (inject it in constructor) and SafeResourseUrl - For showcasing YT video 
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  //For storing the data of the dynamic playlist Id passed from the previous page
  loadedVideoPlaylist: Playlist;

  vidUrl: SafeResourceUrl;

  videos: Observable<any[]>;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private videosService: VideosService, private videoService: VideoService, private domSanitizer:DomSanitizer) { }

  ngOnInit() {

     //Using the dynamic attribute (playlistId) passed from the previous page and storing it in a local variable. Subscribe is always active and not only when page is visible (so we could also have written it outside ngOnInit) 
     this.route.paramMap.subscribe(paramMap => {
      //Adding an If check for scenarios where no dynamic attribute has been passed
      if (!paramMap.has('playlistId')) {
        this.navCtrl.navigateBack('/tabs/video-package/videos');
        return;
      }
      //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
      this.loadedVideoPlaylist = this.videosService.accessPlaylistId(paramMap.get('playlistId'));
      console.log(this.loadedVideoPlaylist);
    });

    //Getting the list of videos in the playlist
    this.videos = this.videoService.getVideoList(this.loadedVideoPlaylist.id);
    console.log(this.videos);
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EgWGPPGoP3M");


    // //For showcasing YT video
    // this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EgWGPPGoP3M");
  }

  //For showcasing YT video
  playVideo(video) {
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.snippet.resourceId.videoId);
    }

}
