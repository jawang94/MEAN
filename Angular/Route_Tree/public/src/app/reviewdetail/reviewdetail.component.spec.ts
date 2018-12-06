import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewdetailComponent } from './reviewdetail.component';

describe('ReviewdetailComponent', () => {
  let component: ReviewdetailComponent;
  let fixture: ComponentFixture<ReviewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
