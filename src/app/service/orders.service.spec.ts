import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdersService } from './orders.service';
import { ordersResponse } from '../interfaces/orders.interface';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService],
    });
    service = TestBed.inject(OrdersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => { //revisar que no haya solicitudes HTTP pendientes después de cada prueba
    httpTestingController.verify();
  });

  const order: ordersResponse = {
    id: 1,
    userId: '2',
    client: 'Camilo',
    table: '3',
    products: [
      {
        qty: 2,
        product: {
          id: '1',
          name: 'Classic Burger',
          price: 5,
          image: 'string',
          type: 'Lunch',
          dateEntry: 'string',
        }
      },
      {
        qty: 3, product: {
          id: '2',
          name: 'Fries',
          price: 7,
          image: 'string',
          type: 'Sides',
          dateEntry: 'string',
        }
      },
    ],
    status: 'pending',
    dataEntry: '',
    timer: 0,
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to create a new order', () => {

    service.postOrder(order).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/orders');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(order);

    req.flush({order});

  });

  it('should send a GET request to obtain the existing orders', () => {

    service.getOrders().subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/orders');
    expect(req.request.method).toBe('GET');
  });

  it('should send a PUT request to update the order status', () => {

    const newStatus = 'delivered';

    service.updateOrderStatus(order.id, newStatus).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/orders/1');
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual({status: newStatus});
  });

  it('shouls send a PUT request to update the timer of the order', () => {

    const newTimer = 45;

    service.updateOrderTime(order.id, newTimer).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/orders/1');
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual({timer: newTimer});
  })
});
