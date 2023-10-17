import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersViewComponent } from './orders-view.component';
import { ProductsService } from '../../service/products.service';
import { of } from 'rxjs';

describe('OrdersViewComponent', () => {
  let component: OrdersViewComponent;
  let fixture: ComponentFixture<OrdersViewComponent>;
  let compiled: HTMLElement;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersViewComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    fixture = TestBed.createComponent(OrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productsService = TestBed.inject(ProductsService);
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const productsData =
    [
      {
        id: '1',
        name: 'American coffee',
        price: 5,
        image: '',
        type: 'Breakfast',
        dateEntry: 'date',
      },
      {
        id: '2',
        name: 'Water 500ml',
        price: 5,
        image: '',
        type: 'Beverages',
        dateEntry: 'date',
      },
    ]

  it('should create newOrderForm child component', () => {
    expect(component.newOrderForm).toBeDefined();
  });

  it('should show the breakfast menu when clicking on Breakfast menu button', () => {

    const breakfastButton = compiled.querySelector('#breakfast') as HTMLButtonElement;
    breakfastButton.click();

    const getProductsSpy = jest.spyOn(productsService, 'getProducts').mockReturnValue(of(productsData));

    component.breakfastMenu();

    expect(getProductsSpy).toHaveBeenCalled();
    component.products = productsData;
    component.filteredProducts = component.products.filter((product) => {
      product.type === 'Breakfast';
    });

    expect(component.productQuantities).toEqual([0]);
  });

  it('should show the lunch and dinner menu when clicking on lunch&Dinner menu button', () => {

    const lunchDinnerButton = compiled.querySelector('#lunchandDinner') as HTMLButtonElement;
    lunchDinnerButton.click();

    const getProductsSpy = jest.spyOn(productsService, 'getProducts').mockReturnValue(of(productsData));

    component.lunchAndDinnerMenu();

    expect(getProductsSpy).toHaveBeenCalled();
    component.products = productsData;
    component.filteredProducts = component.products.filter((product) => {
      product.type !== 'Breakfast';
    });

    expect(component.isBreakfastSelected).toBe(false);
    expect(component.productQuantities).toEqual([0]);
  });

  it('should decrease the quantity of the product selected', () => {

    component.productQuantities = [2, 1, 0, 4];
    const indexToDecrease = 0;

    component.decreaseQuantity(indexToDecrease, productsData[indexToDecrease]);
    expect(component.productQuantities[indexToDecrease]).toBe(1);

    const decreaseQtySpy = jest.spyOn(component, 'decreaseQuantity');
    const addProductSpy = jest.spyOn(component, 'addProductToOrder');

    expect(decreaseQtySpy).toHaveBeenCalledWith(indexToDecrease, productsData[indexToDecrease]);
    expect(addProductSpy).toHaveBeenCalledWith(component.productQuantities[indexToDecrease], productsData[indexToDecrease]);
  });
});
