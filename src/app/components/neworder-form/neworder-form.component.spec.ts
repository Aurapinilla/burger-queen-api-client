import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NeworderFormComponent } from './neworder-form.component';
import { OrdersService } from '../../service/orders.service';

describe('NeworderFormComponent', () => {
  let component: NeworderFormComponent;
  let fixture: ComponentFixture<NeworderFormComponent>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NeworderFormComponent],
      providers: [OrdersService],
    }).compileComponents();

    fixture = TestBed.createComponent(NeworderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ordersService = TestBed.inject(OrdersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const productOne = {
    product: {
      id: '1',
      name: 'Classic Burger',
      price: 10,
      image: '',
      type: 'Lunch',
      dateEntry: '2023-10-05T15:55:47.644Z',
    },
    quantity: 2,
  };

  const producTwo = {
    product: {
      id: '3',
      name: 'Fries',
      price: 5,
      image: '',
      type: 'Sides',
      dateEntry: '2023-7-05T15:55:47.644Z',
    },
    quantity: 5,
  };

  it('should add a product to orderedProducts', () => {

    component.addProduct(productOne);
    expect(component.orderedProducts).toContain(productOne);
  });

  it('should delete a product from orderedProducts', () => {
    component.orderedProducts = [productOne, producTwo];

    jest.spyOn(component, 'deleteProduct');
    component.deleteProduct(0);
    expect(component.orderedProducts).not.toContain(productOne);
  });

  it('should emit deletedProductClicked event', () => {

    const index = 0;
    jest.spyOn(component.deletedProductClicked, 'emit');
    component.deleteProduct(index);
    expect(component.deletedProductClicked.emit).toHaveBeenCalledWith(index);
  });

  it('should create an order and emit createOrderClicked event', fakeAsync(() => {

    jest.spyOn(component.createOrderClicked, 'emit');
    component.clientName = 'Laura Gomez';
    component.tableNumber = '6';
    component.createOrder();

    expect(component.createOrderClicked.emit).toHaveBeenCalled();

    tick(3000);

    expect(component.orderWasCreated).toBe(false);
  }));
});
