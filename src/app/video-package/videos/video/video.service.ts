import { Injectable } from '@angular/core';

//Import and inject HttpClient for accessing YT Channel and Firebase Database. 
import { HttpClient } from '@angular/common/http';

// To enable the map() function to work. New version of angular does not support map function. You might have to restart VSCode for this importto work (for more you may read - https://stackoverflow.com/questions/50203241/angular-5-to-6-upgrade-property-map-does-not-exist-on-type-observable/50775729; https://github.com/webmaxru/pwa-workshop-angular/issues/2)
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  apiKeyYT = 'AIzaSyAj9HJNIwFrlbqc0lZT6b2GVIcTTUDPmQw';

  constructor(public http: HttpClient) { }

  //Get all the videos in the playlist, whose id has been passed on to the function.
  getVideoList (playlistId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKeyYT + '&playlistId=' + playlistId + '&part=snippet,id&maxResults=20').pipe(map(res => {
      return res ['items'];
    }));
  }
}
