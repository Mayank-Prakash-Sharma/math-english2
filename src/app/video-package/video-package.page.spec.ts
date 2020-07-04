import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoPackagePage } from './video-package.page';

describe('VideoPackagePage', () => {
  let component: VideoPackagePage;
  let fixture: ComponentFixture<VideoPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
