import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersViewComponent } from './orders-view.component';
import { OrdersService } from '../../service/orders.service';
import { ordersResponse } from 'src/app/interfaces/orders.interface';

describe('OrdersViewComponent', () => {
  let component: OrdersViewComponent;
  let fixture: ComponentFixture<OrdersViewComponent>;
  let compiled: HTMLElement; 
  let ordersService: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersViewComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(OrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ordersService = TestBed.inject(OrdersService);
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
