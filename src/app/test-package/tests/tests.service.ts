import { Injectable } from '@angular/core';

// Import the data model for loadedExam1 object. It will have the same value as loadedExam variable (which holds the dynamic exam id passed from the previous page) of the .ts file. I am going to use this loadedExam1 object in some if checks in my fucntion ........ to display my exam specific test-packages. 
import { Exams } from '../test-package.model';

@Injectable({
  providedIn: 'root'
})

export class TestsService {

  //For storing the data of the dynamic exam Id passed from the previous page. I am basically doing this in .ts file. There i will just set the value of this variable. 
  loadedExam1: Exams;

  constructor() { }
} 
