import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersToDeliverComponent } from './orders-to-deliver.component';
import { OrdersService } from '../../service/orders.service';
import { first, of } from 'rxjs';

describe('OrdersToDeliverComponent', () => {
  let component: OrdersToDeliverComponent;
  let fixture: ComponentFixture<OrdersToDeliverComponent>;
  let ordersService: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [OrdersToDeliverComponent],
      providers: [OrdersService],
    });
    fixture = TestBed.createComponent(OrdersToDeliverComponent);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial values', () => {
    expect(component.displayedColumns).toEqual(['client', 'table', 'products', 'delivery']);
    expect(component.orders).toEqual([]);
  });

  it('should call orders ready to deliver ngOnInit', () => {
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
      status: "ready to deliver",
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

  it('should filter only orders with "ready to deliver" status', () => {


    const getOrdersSpy = jest.spyOn(ordersService, 'getOrders').mockReturnValue(of(ordersData));

    component.readyOrders();
    expect(getOrdersSpy).toHaveBeenCalled();
    expect(component.orders).toEqual(ordersData.filter((order) => {
      return order.status === 'ready to deliver';
    }));
  });

  it('should update the order status to "delivered"', () => {

    const firstOrder = ordersData[0];
    firstOrder.status = 'delivered';

    const updateOrderStatusSpy = jest.spyOn(ordersService, 'updateOrderStatus');

    component.markDelivered(firstOrder);
    expect(updateOrderStatusSpy).toHaveBeenCalledWith(firstOrder.id, firstOrder.status);
  });

});
