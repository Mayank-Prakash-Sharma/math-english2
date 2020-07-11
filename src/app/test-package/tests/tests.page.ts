import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

// Import and inject Service having my packages and data model class
import { TestPackageService } from '../test-package.service';
import { Exams } from '../test-package.model';

// Import and inject Service having my test packages and data model class
import { TestsService } from './tests.service';
import { TestPackage } from './tests.model';

//Import Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  //For storing the data of the dynamic subject Id passed from the previous page
  loadedExam: Exams;
  
  //To store the Observable received from Firebase
  private testPackages: Observable<TestPackage[]>;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private testPackageService: TestPackageService, private testsService: TestsService) { }

  ngOnInit() {

    //Using the dynamic attribute (examId) passed from the previous page and storing it in a local variable. Subscribe is always active and not only when page is visible (so we could also have written it outside ngOnInit) 
    this.route.paramMap.subscribe(paramMap => {
      //Adding an If check for scenarios where no dynamic attribute has been passed
      if (!paramMap.has('examId')) {
        this.navCtrl.navigateBack('/tabs/exam-package');
        return;
      }
      //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
      this.loadedExam = this.testPackageService.accessExamId(paramMap.get('examId'));
      //Setting the value of the loadedExam1 object in .service.ts file to be the same as loadedExam
      this.testsService.loadedExam1 = this.loadedExam;  

      console.log(this.testsService.loadedExam1);
      console.log(this.testsService.loadedExam1.id);

      //Set the reference of the collection choosen by the user in the previous page
      this.testsService.setPackages();


      //Store the observable received from Firebase Firestore in our local observable
      this.testPackages = this.testsService.getPackages();

    });  

  }

} 
