import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OrdersToDeliverViewComponent } from './orders-to-deliver-view.component';

describe('OrdersToDeliverViewComponent', () => {
  let component: OrdersToDeliverViewComponent;
  let fixture: ComponentFixture<OrdersToDeliverViewComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersToDeliverViewComponent]
    });
    fixture = TestBed.createComponent(OrdersToDeliverViewComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "orders" tab', () => {
    
    const routerSpy = jest.spyOn(router, 'navigate');

    component.navigatetoCreateOrder();
    expect(routerSpy).toHaveBeenCalledWith(['orders']);
  })
});
