import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
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
    id: 14,
    name: 'Double burger',
    price: 10,
    image: '',
    type: 'Lunch',
    dateEntry: '2022-03-05 15:14:10'
  }
});
