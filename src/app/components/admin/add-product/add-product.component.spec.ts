import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
import { ProductsService } from '../../../service/products.service';
import { of } from 'rxjs';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, ProductsService],
    });
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set innitial values', () => {
    expect(component.hideForm).toBe(false);
    expect(component.productType).toEqual(['Breakfast', 'Lunch', 'Beverages', 'Sides']);
  });

  it('should hide the form', () => {

    component.hideProductForm();
    expect(component.hideForm).toBe(true);
  });

  it('should create a new product when saving the form', () => {

    const newProduct = {
      id: '',
      name: 'Test Product',
      price: 10,
      image: '',
      type: 'Lunch',
      dateEntry: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1,3}Z$/),
    };

    const newProductSpy = jest.spyOn(productsService, 'postProducts').mockReturnValue(of(newProduct));

    component.newProductForm.get('name')?.setValue('Test Product');
    component.newProductForm.get('price')?.setValue(10);
    component.newProductForm.get('type')?.setValue('Lunch');

    component.save(new Event('click'));

    expect(newProductSpy).toHaveBeenCalledWith(newProduct);
    expect(component.hideForm).toBe(true);
    expect(component.newProductForm.reset);
  });
});
