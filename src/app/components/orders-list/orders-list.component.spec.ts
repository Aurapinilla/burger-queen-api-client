import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersListComponent } from './orders-list.component';
import { OrdersService } from '../../service/orders.service';
import { of } from 'rxjs';

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;
  let ordersService: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [OrdersListComponent],
      providers: [OrdersService],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial values', () => {
    expect(component.displayedColumns).toEqual(['client', 'status', 'products', 'timer', 'action']);
    expect(component.isOrderDelivered).toBe(false);
    expect(component.orders).toEqual([]);
    expect(component.orderStatusMap).toEqual({});
    expect(component.orderTimers).toEqual({});
  });

  it('should call ordersList on ngOnInit', () => {
    const getOrdersSpy = jest.spyOn(ordersService, 'getOrders').mockReturnValue(of([]));

    component.ngOnInit();
    expect(getOrdersSpy).toHaveBeenCalled();
  });

  const ordersData = [
    {
      id: 1,
      userId: "2",
      client: "Jude Milhon",
      table: "2",
      products: [
        {
          qty: 1,
          product: {
            id: '9',
            name: "Ham and cheese sandwich",
            price: 1000,
            image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
            type: "Breakfast",
            dateEntry: "2022-03-05 15:14:10"
          }
        },
      ],
      status: "delivered",
      dataEntry: "2022-03-05 15:00",
      timer: 82
    },
    {
      id: 2,
      userId: '2',
      client: "Katie Bouman",
      table: "2",
      products: [
        {
          qty: 2,
          product: {
            id: '1',
            name: 'Classic Burger',
            price: 10,
            image: '',
            type: 'Lunch',
            dateEntry: '2023-10-05T15:55:47.644Z',
          }
        },
        {
          qty: 5,
          product: {
            id: '3',
            name: 'Fries',
            price: 5,
            image: '',
            type: 'Sides',
            dateEntry: '2023-7-05T15:55:47.644Z',
          }
        }
      ],
      status: "delivered",
      dataEntry: "2022-03-05 15:00",
      timer: 2672,
    },
  ];

  it('should sort and update orders on ordersList', () => {

    const getOrdersSpy = jest.spyOn(ordersService, 'getOrders').mockReturnValue(of(ordersData));

    component.ordersList();

    expect(getOrdersSpy).toHaveBeenCalled();
    expect(component.orders).toEqual(ordersData.sort((a, b) => {

      const dateA = new Date(a.dataEntry).getTime();
      const dateB = new Date(b.dataEntry).getTime();

      return dateB - dateA;
    }));
  });

  const order =
  {
    id: 1,
    userId: "2",
    client: "Jude Milhon",
    table: "2",
    products: [
      {
        qty: 1,
        product: {
          id: '9',
          name: "Ham and cheese sandwich",
          price: 1000,
          image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
          type: "Breakfast",
          dateEntry: "2022-03-05 15:14:10"
        }
      },
    ],
    status: "pending",
    dataEntry: "2022-03-05 15:00",
    timer: 843900
  }

  it('should start or stop the timer of an specific order', () => {

    component.startTimer(order);
    component.stopTimer(order);
  });

  it('should update order status and timer', fakeAsync(() => {
    order.status = 'ready to deliver';
    
    const updateOrderStatusSpy = jest.spyOn(ordersService, 'updateOrderStatus').mockReturnValue(of(order));
    const updateOrderTimeSpy = jest.spyOn(ordersService, 'updateOrderTime').mockReturnValue(of(order));
  
    const startTimerSpy = jest.spyOn(component, 'startTimer');
    const stopTimerSpy = jest.spyOn(component, 'stopTimer');
    const setTimerSpy = jest.spyOn(component, 'setTimer');
    const ordersListSpy = jest.spyOn(component, 'ordersList');
  
    component.markOrderReady(order);
  
    expect(updateOrderStatusSpy).toHaveBeenCalledWith(order.id, 'pending');
    expect(stopTimerSpy).toHaveBeenCalledWith(order);
    expect(updateOrderTimeSpy).toHaveBeenCalledWith(order.id, order.timer);
    expect(setTimerSpy).toHaveBeenCalledWith(order);
  
    // Simula el avance del tiempo para completar la suscripción.
    tick();
  
    expect(order.status).toBe('pending');
    expect(order.timer).toBeGreaterThan(843900);
  
    expect(ordersListSpy).toHaveBeenCalled();

    updateOrderStatusSpy.mockRestore();
    updateOrderTimeSpy.mockRestore();
    startTimerSpy.mockRestore();
    stopTimerSpy.mockRestore();
    setTimerSpy.mockRestore();
  }));
});
