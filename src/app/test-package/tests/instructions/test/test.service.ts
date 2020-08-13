import { Injectable } from '@angular/core';

// Import the data model for loadedTest1 object. It will have the same value as loadedTest variable (which holds the dynamic test id passed from the previous page) of the .ts file. I am going to use this loadedTest1 object in my fucntion ........ to display my test specific sections. 
import { InstructionsService } from '../instructions.service';
import { Test } from '../instructions.model';
import { TestsService } from '../../tests.service';
import { TestPackage } from '../../tests.model';
import { TestPackageService } from '../../../test-package.service';

//Import the essential modules to work with Firebase Firestore database
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

//Import the data model that defines the structure of our objects in Firestore Database
import { Section } from './test.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  //For storing the data of the dynamic test Id passed from the previous page. I am basically doing this in .ts file. There i will just set the value of this variable. 
  loadedTest1: string;

  private sectionCollection:AngularFirestoreCollection<Section>; //Will contain the reference to our Sections Collection
  private sections: Observable<Section[]>;  //Will contain all the data of our Section documents within our Sections Collection

  // private questionsCollection:AngularFirestoreCollection<Question>; //Will contain the reference to our Questions Collection
  // private questions: Observable<Question[]>;  //Will contain all the data of our Question documents within our Questions Collection

  constructor(private afs: AngularFirestore, private instructionsService: InstructionsService, private testsService: TestsService, private testPackageService: TestPackageService) { }

  //Set the values of the section collection and the sections within it based on what test the user clicked in the previous page
  setSections() {
    // this.sectionCollection = this.afs.collection<TestPackage>('Demo Exam').doc(si8cxqaQagFFDURRkmY2).collection<Test>('Tests').doc(U09nqinI4BuddNxoSvbW).collection{'Sections'};
    // this.sectionCollection = this.afs.collection<TestPackage>(this.testsService.loadedExam1.id).doc(this.instructionsService.loadedPackageId1).collection<Test>('Tests').doc(this.loadedTest1).collection<Section>('Sections');

    this.sectionCollection = this.afs.collection<TestPackage>(this.testsService.loadedExam1.id).doc(this.instructionsService.loadedPackageId1).collection<Test>('Tests').doc(this.loadedTest1).collection<Section>('Sections');
    this.sections = this.sectionCollection.snapshotChanges().pipe(
      map(sections => {
        return sections.map(section => {
          const data = section.payload.doc.data();  // Getting the data of each section
          const id = section.payload.doc.id;  // Getting the id of each section
          return { id, ...data };
        })
      })
    )
   }

   //To View the array of Section documents in the collection
   getSections(): Observable<Section[]> {
    return this.sections;
  }

 //To View the data in a particular Section document
 getSection(id: string): Observable<Section> {
   return this.sectionCollection.doc<Section>(id).valueChanges().pipe(
     take(1),
     map(tst => {
       tst.id = id;
       return tst;
     })
   );
 }

 //Set the values of the questions collection and the questions within it based on what test the user clicked in the previous page
//  setQuestions() {
//     this.questionsCollection = this.afs.collection<TestPackage>(this.testsService.loadedExam1.id).doc(this.instructionsService.loadedPackageId1).collection<Test>('Tests').doc(this.loadedTest1).collection<Section>('Sections').doc('section1').collection<Question>('questions');
//     this.questions = this.questionsCollection.snapshotChanges().pipe(
//     map(questions => {
//       return questions.map(question => {
//         const data = question.payload.doc.data();  // Getting the data of each question
//         const id = question.payload.doc.id;  // Getting the id of each question
//         return { id, ...data };
//       })
//     })
//   )

//  }

//    //To View the array of Question documents in the collection
//    getQuestions(): Observable<Question[]> {
//     return this.questions;
//   }

//  //To View the data in a particular Question document
//  getQuestion(id: string): Observable<Question> {
//    return this.questionsCollection.doc<Question>(id).valueChanges().pipe(
//      take(1),
//      map(tst => {
//        tst.id = id;
//        return tst;
//      })
//    );
//  }

}
