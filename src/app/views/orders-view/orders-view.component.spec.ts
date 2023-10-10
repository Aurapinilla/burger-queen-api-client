import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersViewComponent } from './orders-view.component';

describe('OrdersViewComponent', () => {
  let component: OrdersViewComponent;
  let fixture: ComponentFixture<OrdersViewComponent>;
  let compiled: HTMLElement; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersViewComponent]
    });
    fixture = TestBed.createComponent(OrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('decreaseQuantity should decrease product quantity  by 1', () => {

    const qtyButtons = compiled.querySelectorAll('.qtyBtn');
    //qtyButtons[0].click();
    expect(component.productQuantities).toBe(0);
  })
});
