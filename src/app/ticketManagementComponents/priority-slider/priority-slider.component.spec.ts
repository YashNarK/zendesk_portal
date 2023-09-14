import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritySliderComponent } from './priority-slider.component';

describe('PrioritySliderComponent', () => {
  let component: PrioritySliderComponent;
  let fixture: ComponentFixture<PrioritySliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrioritySliderComponent]
    });
    fixture = TestBed.createComponent(PrioritySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
