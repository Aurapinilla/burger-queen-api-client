import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToDeliverViewComponent } from './orders-to-deliver-view.component';

describe('OrdersToDeliverViewComponent', () => {
  let component: OrdersToDeliverViewComponent;
  let fixture: ComponentFixture<OrdersToDeliverViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersToDeliverViewComponent]
    });
    fixture = TestBed.createComponent(OrdersToDeliverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
