import { Component, OnInit } from '@angular/core';

//Import SegmentChangeEventDetail
import { SegmentChangeEventDetail } from '@ionic/core';

// Import and inject Service having my packages and data model class
import { TestPackageService } from './test-package.service';
import { Exams } from './test-package.model';

@Component({
  selector: 'app-test-package',
  templateUrl: './test-package.page.html',
  styleUrls: ['./test-package.page.scss'],
})

export class TestPackagePage implements OnInit {
  loadedExams: Exams[];
  freeExams: Exams[];

  constructor(private testPackageService: TestPackageService) { }

  ngOnInit() {
    this.loadedExams = this.testPackageService.freeExams; 
    console.log("ngoninit fired");
  }

  // This function is called when someone clicks the filters (i.e. segmented buttons)
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>)
  {
    if (event.detail.value === 'free-exam') {
      this.loadedExams = this.testPackageService.freeExams;
      console.log('free-exam check');
    } else {
      this.loadedExams = []; 
      console.log('purchased-exam check');
    }
  }

} 
