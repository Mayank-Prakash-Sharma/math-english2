import { Component, OnInit } from '@angular/core';

//Import SegmentChangeEventDetail
import { SegmentChangeEventDetail } from '@ionic/core';

// Import and inject Service having my packages and data model class
import { VideoPackageService } from './video-package.service';
import { VideoPackages } from './video-package.model';

@Component({
  selector: 'app-video-package',
  templateUrl: './video-package.page.html',
  styleUrls: ['./video-package.page.scss'],
})
export class VideoPackagePage implements OnInit {
  loadedVideoPackages: VideoPackages[];
  freeVideoPackages: VideoPackages[];

  constructor(private videoTstService: VideoPackageService) { }

  ngOnInit() {
    this.loadedVideoPackages = this.videoTstService.freeVideoPackages; 
    console.log("ngoninit fired");
  }

  // This function is called when someone clicks the filters (i.e. segmented buttons)
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>)
  {
    if (event.detail.value === 'free-video') {
      this.loadedVideoPackages = this.videoTstService.freeVideoPackages;
      console.log('free-video check');
    } else {
      this.loadedVideoPackages = []; 
      console.log('purchased-video check');
    }
  }

}
