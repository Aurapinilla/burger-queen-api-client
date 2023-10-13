import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReadyOrdersBtnComponent } from './ready-orders-btn.component';

describe('ReadyOrdersBtnComponent', () => {
  let component: ReadyOrdersBtnComponent;
  let fixture: ComponentFixture<ReadyOrdersBtnComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadyOrdersBtnComponent]
    });
    fixture = TestBed.createComponent(ReadyOrdersBtnComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should nagivate to "ready to deliver orders view"', () => {

    const nagivationSpy = jest.spyOn(router, 'navigate');

    component.readyOrders();
    expect(nagivationSpy).toHaveBeenCalledWith(['ready-to-deliver']);
  })
});
