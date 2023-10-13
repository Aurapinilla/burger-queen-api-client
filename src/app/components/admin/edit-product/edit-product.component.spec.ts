import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { ProductsService } from '../../../service/products.service';
import { of } from 'rxjs';
import { EditProductComponent } from './edit-product.component';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, ProductsService],
    });
    fixture = TestBed.createComponent(EditProductComponent);
    productsService = TestBed.inject(ProductsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const productInput = {
    id: '14',
    name: 'Double burger',
    price: 10,
    image: '',
    type: 'Lunch',
    dateEntry: '2022-03-05 15:14:10'
  }

  it('should set innitial values', () => {
    expect(component.hideForm).toBe(true);
    expect(component.productType).toEqual(['Breakfast', 'Lunch', 'Beverages', 'Sides']);
  });

  it('should start the editProductForm with the existing product data ngOnInit', () => {

    component.ngOnInit();

    expect(component.product = productInput)

    expect(component.updateProductForm.contains(productInput.name));
    expect(component.updateProductForm.contains(productInput.price.toString()));
    expect(component.updateProductForm.contains(productInput.type));
  });

  it('should hide/show the form to update the user when it should', () => {

    component.hideupdateProductForm();
    expect(component.hideForm).toBe(false);
  });

  it('should update the product data when saving the form', () => {

    let productUpdatedEmitted = false;
    component.product = productInput; // @Input user
    component.ngOnInit();

    expect(component.product).toEqual(productInput);

    expect(component.updateProductForm.get)

    const productUpdated = {
      name: 'Bacon burger',
      price: 10,
      type: 'Lunch',
    };

    const updateUserSpy = jest.spyOn(productsService, 'updateProduct').mockReturnValue(of(productInput));

    component.updateProductForm.get('name')?.setValue('Bacon burger');
    component.updateProductForm.get('price')?.setValue(10);
    component.updateProductForm.get('type')?.setValue('Lunch');

    component.productUpdated.subscribe(() => {
      productUpdatedEmitted = true;
    });

    component.save(new Event('click'));

    expect(updateUserSpy).toHaveBeenCalledWith(productInput.id, productUpdated);
    expect(component.hideForm).toBe(false);
    expect(productUpdatedEmitted).toBe(true);
  });

  it('should provide access to nameInput, priceInput and typeSelection control', () => {
    component.ngOnInit();
    expect(component.nameInput).toBeInstanceOf(AbstractControl);
    expect(component.nameInput?.value).toBe('');
    
    expect(component.priceInput).toBeInstanceOf(AbstractControl);
    expect(component.priceInput?.value).toBe('');
    
    expect(component.typeSelection).toBeInstanceOf(AbstractControl);
    expect(component.typeSelection?.value).toBe('');
  });
});
