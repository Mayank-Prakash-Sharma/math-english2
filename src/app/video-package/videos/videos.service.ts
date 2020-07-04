import { Injectable } from '@angular/core';

//Import the data model that defines the structure of our objects
import { Playlist } from './videos.model';

// Import the data model for loadedVideoPackage1 object. It will have the same value as loadedVideoPackage variable (which holds the dynamic subject id passed from the previous page) of the .ts file. I am going to use this loadedVideoPackage1 object in some if checks in my fucntion accessPlaylistId. 
import { VideoPackages } from '../video-package.model';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  //For storing the data of the dynamic subject Id passed from the previous page. I am basically doing this in .ts file. There i will just set the value of this variable. 
  loadedVideoPackage1: VideoPackages;

  //The data of my Playlists
  private _freeEnglishPlaylists: Playlist[] = [
    new Playlist('PL-ZmZrWcWjqYamUtxMyC5XbCAoW9g4Sbt', 'Noun'),
    new Playlist('PL-ZmZrWcWjqZje7TVOi6E7FM0w3ea2H3N', 'Pronoun'),
    new Playlist('PL-ZmZrWcWjqasu4TQ5mZglQzu9-iZcZr8', 'Adjective'),
  ];

  private _freeArithmeticPlaylists: Playlist[] = [
    new Playlist('PL-ZmZrWcWjqYamUtxMyC5XbCAoW9g4Sbt', 'Probability'),
    new Playlist('PL-ZmZrWcWjqZje7TVOi6E7FM0w3ea2H3N', 'P&C'),
    new Playlist('PL-ZmZrWcWjqasu4TQ5mZglQzu9-iZcZr8', 'Percentage'),
  ];

  private _freeHigherMathsPlaylists: Playlist[] = [
    new Playlist('PL-ZmZrWcWjqYamUtxMyC5XbCAoW9g4Sbt', 'Geometry'),
    new Playlist('PL-ZmZrWcWjqZje7TVOi6E7FM0w3ea2H3N', 'Trigonometry'),
    new Playlist('PL-ZmZrWcWjqasu4TQ5mZglQzu9-iZcZr8', 'Mensuration'),
  ];

  //getter function to get the data of my Playlists
  get freeEnglishPlaylists() {
    console.log ("service called");
    console.log (this._freeEnglishPlaylists);
    return [...this._freeEnglishPlaylists];  // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  //getter function to get the data of my Playlists
  get freeArithmeticPlaylists() {
    console.log ("service called");
    console.log (this._freeArithmeticPlaylists);
    return [...this._freeArithmeticPlaylists];  // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  //getter function to get the data of my Playlists
  get freeHigherMathsPlaylists() {
    console.log ("service called");
    console.log (this._freeHigherMathsPlaylists);
    return [...this._freeHigherMathsPlaylists];  // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  //Function to provide the dynamic id of the playlist (shown as ion-item in html) that has been clicked on the previous page
  accessPlaylistId (id: string) {
    if (this.loadedVideoPackage1.id === 'subject1') {
    return {...this._freeEnglishPlaylists.find(s => s.id === id)}; // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
    } else if (this.loadedVideoPackage1.id === 'subject2') {
      return {...this._freeArithmeticPlaylists.find(s => s.id === id)};
    } else if (this.loadedVideoPackage1.id === 'subject3') {
      return {...this._freeHigherMathsPlaylists.find(s => s.id === id)};
    }
  }

  constructor() { }
}
