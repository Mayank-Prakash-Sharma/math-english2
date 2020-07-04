import { Injectable } from '@angular/core';

//Import the data model that defines the structure of our objects
import { VideoPackages } from './video-package.model';

@Injectable({
  providedIn: 'root'
})
export class VideoPackageService {

  //The data of my Free Classes Folders
  private _freeVideoPackages: VideoPackages[] = [
    new VideoPackages('subject1', 'English', 'English Classes', 0),
    new VideoPackages('subject2', 'Arithmetic', 'Arithmetic Classes', 0),
    new VideoPackages('subject3', 'Higher Maths', 'Higher Maths Classes', 0),
  ];

  //getter function to get the data of my Free Classes Folders
  get freeVideoPackages() {
    console.log ("service called");
    console.log (this._freeVideoPackages);
    return [...this._freeVideoPackages];  // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  //Function to provide the dynamic id of the subject (shown as ion-item in html) that has been clicked on the previous page
  accessSubjectId (id: string) {
    return {...this._freeVideoPackages.find(s => s.id === id)}; // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  constructor() { }
}
