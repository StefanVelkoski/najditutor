import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementThumbnailComponent } from './announcement-thumbnail.component';

describe('AnnouncementThumbnailComponent', () => {
  let component: AnnouncementThumbnailComponent;
  let fixture: ComponentFixture<AnnouncementThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
