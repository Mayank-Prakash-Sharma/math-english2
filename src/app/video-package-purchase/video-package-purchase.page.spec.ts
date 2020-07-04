import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoPackagePurchasePage } from './video-package-purchase.page';

describe('VideoPackagePurchasePage', () => {
  let component: VideoPackagePurchasePage;
  let fixture: ComponentFixture<VideoPackagePurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPackagePurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoPackagePurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
