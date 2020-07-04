import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestPackagePage } from './test-package.page';

describe('TestPackagePage', () => {
  let component: TestPackagePage;
  let fixture: ComponentFixture<TestPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
