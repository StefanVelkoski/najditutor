import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMainComponent } from './categories-main.component';

describe('CategoriesMainComponent', () => {
  let component: CategoriesMainComponent;
  let fixture: ComponentFixture<CategoriesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
