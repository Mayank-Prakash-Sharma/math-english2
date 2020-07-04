import { Injectable } from '@angular/core';

//Import the data model that defines the structure of our objects
import { Exams } from './test-package.model';

@Injectable({
  providedIn: 'root'
})
export class TestPackageService {

  //The data of my Free Exams Folders
  private _freeExams: Exams[] = [
    new Exams('exam1', 'SSC', 'CGL'),
    new Exams('exam2', 'SSC', 'CHSL'),
    new Exams('exam3', 'BANK', 'IBPS'),
    new Exams('exam4', 'BANK', 'SBI'),
  ];

  //getter function to get the data of my Free Exams Folders
  get freeExams() {
    console.log ("service called");
    console.log (this._freeExams);
    return [...this._freeExams];  // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  //Function to provide the dynamic id of the exam (shown as ion-item in html) that has been clicked on the previous page
  accessExamId (id: string) {
    return {...this._freeExams.find(s => s.id === id)}; // Using spread operator (i.e. ...) allows me to clone the entire object and get a new array copy
  }

  constructor() { }
} 
