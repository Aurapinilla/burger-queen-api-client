import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { productResponse } from '../interfaces/products.interface';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => { //revisar que no haya solicitudes HTTP pendientes después de cada prueba
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const products: productResponse[] = [
    {
      id: '1',
      name: 'Classic Burger',
      price: 5,
      image: 'string',
      type: 'Lunch',
      dateEntry: 'string',
    },
    {
      id: '2',
      name: 'Fries',
      price: 7,
      image: 'string',
      type: 'Sides',
      dateEntry: 'string',
    }
  ];

  const product: productResponse = {
    id: '5',
    name: 'American Coffe',
    price: 4,
    image: 'string',
    type: 'Breakfast',
    dateEntry: 'string',
  }

  it('should send a GET request to get all the existing products', () => {

    service.getProducts().subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/products');
    expect(req.request.method).toBe('GET');

    req.flush({ products })
  });

  it('should send a POST request to create a new product in the API', () => {

    service.postProducts(product).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/products');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(product);

    req.flush({product});
  });

  it('should send a PUT request to update aspects of a product', () => {

    service.updateProduct(product.id, product).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/products/5');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(product);

    req.flush({product});
  });

  it('should send a DELETE request to remove a specific product', () => {

    service.deleteProduct(product.id).subscribe((response) => {
      expect(response).toBeDefined();
    });

    const req = httpTestingController.expectOne('http://localhost:8080/products/5');
    expect(req.request.method).toBe('DELETE');
  });
});
