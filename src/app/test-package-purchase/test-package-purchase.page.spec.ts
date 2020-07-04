import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestPackagePurchasePage } from './test-package-purchase.page';

describe('TestPackagePurchasePage', () => {
  let component: TestPackagePurchasePage;
  let fixture: ComponentFixture<TestPackagePurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPackagePurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestPackagePurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
