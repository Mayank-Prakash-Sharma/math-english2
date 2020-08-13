import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

// Import and inject Service having my test packages and data model class
import { TestsService } from '../tests.service';
import { TestPackage } from '../tests.model';

// Import and inject Service having my tests and data model class
import { InstructionsService } from './instructions.service';
import { Test } from './instructions.model';

//Import Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {

  //For storing the data of the dynamic subject Id passed from the previous page
  // loadedPackage: TestPackage;
  loadedPackageId: string;
  
  //To store the Observable received from Firebase
  private tests: Observable<Test[]>;
  private test: TestPackage;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private testsService: TestsService, private instructionsService: InstructionsService) { }

  ngOnInit() {

        //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
      // this.loadedPackage = this.testsService.accessPackageId(paramMap.get('packageId'));
      this.loadedPackageId = this.route.snapshot.paramMap.get('packageId');

      //Setting the value of the loadedPackageId1 in .service.ts file to be the same as loadedPackageId
      this.instructionsService.loadedPackageId1 = this.loadedPackageId; 
      
      //Set the reference of the collection choosen by the user in the previous page
      this.instructionsService.setTests();
      
      //Store the observable received from Firebase Firestore in our local observable
      this.tests = this.instructionsService.getTests();

      if (this.loadedPackageId) {
        this.testsService.getPackage(this.loadedPackageId).subscribe(tst => {
        this.test = tst; 
        });
      }

      console.log(this.instructionsService.loadedPackageId1);

    //Using the dynamic attribute (packageId) passed from the previous page and storing it in a local variable. Subscribe is always active and not only when page is visible (so we could also have written it outside ngOnInit) 
    // this.route.paramMap.subscribe(paramMap => {
    //   //Adding an If check for scenarios where no dynamic attribute has been passed
    //   if (!paramMap.has('packageId')) {
    //     this.navCtrl.navigateBack('/tabs/test-package/tests');
    //     return;
    //   }
    // }); 

  }

}
