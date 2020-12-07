import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSectionHomepageComponent } from './mid-section-homepage.component';

describe('MidSectionHomepageComponent', () => {
  let component: MidSectionHomepageComponent;
  let fixture: ComponentFixture<MidSectionHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidSectionHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSectionHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
