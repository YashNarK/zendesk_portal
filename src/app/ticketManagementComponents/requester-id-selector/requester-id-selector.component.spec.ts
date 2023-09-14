import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterIdSelectorComponent } from './requester-id-selector.component';

describe('RequesterIdSelectorComponent', () => {
  let component: RequesterIdSelectorComponent;
  let fixture: ComponentFixture<RequesterIdSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesterIdSelectorComponent]
    });
    fixture = TestBed.createComponent(RequesterIdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
