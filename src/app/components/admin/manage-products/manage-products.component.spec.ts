import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../../service/products.service';
import { of } from 'rxjs';
import { ManageProductsComponent } from './manage-products.component';

describe('ManageProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProductsComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    fixture.detectChanges();
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

  it('should set innitial values', () => {

    expect(component.createNewProduct).toBe(false);
    expect(component.products).toEqual([]);
    expect(component.displayedColumns).toEqual(['id', 'product', 'price', 'type', 'actions']);

  });

  it('should get the products list ngOninit', () => {

    const productsListSpy = jest.spyOn(component, 'showProducts');

    component.ngOnInit();
    expect(productsListSpy).toHaveBeenCalled();
  });

  it('should set the value of products with the response of productsService getProducts', () => {

    const getUsersSpy = jest.spyOn(productsService, 'getProducts').mockReturnValue(of(productsData));

    component.showProducts();
    expect(getUsersSpy).toHaveBeenCalled();
    component.products = productsData;
  });

  it('should update the products list', () => {
    const productsListSpy = jest.spyOn(component, 'showProducts');

    component.updateProductsList();
    expect(productsListSpy).toHaveBeenCalled();
  });
});
