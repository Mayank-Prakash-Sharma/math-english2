import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePackagePage } from './home-package.page';

describe('HomePackagePage', () => {
  let component: HomePackagePage;
  let fixture: ComponentFixture<HomePackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
