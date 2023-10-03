import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APHButtonComponent } from './aphbutton.component';

describe('APHButtonComponent', () => {
  let component: APHButtonComponent;
  let fixture: ComponentFixture<APHButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APHButtonComponent]
    });
    fixture = TestBed.createComponent(APHButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
