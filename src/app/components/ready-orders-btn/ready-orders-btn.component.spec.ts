import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyOrdersBtnComponent } from './ready-orders-btn.component';

describe('ReadyOrdersBtnComponent', () => {
  let component: ReadyOrdersBtnComponent;
  let fixture: ComponentFixture<ReadyOrdersBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadyOrdersBtnComponent]
    });
    fixture = TestBed.createComponent(ReadyOrdersBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
