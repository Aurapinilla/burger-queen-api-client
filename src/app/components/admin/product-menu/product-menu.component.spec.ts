  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { ProductsService } from '../../../service/products.service';
  import { productResponse } from '../../../interfaces/products.interface';
  import { HttpClientTestingModule } from '@angular/common/http/testing';
  import { of } from 'rxjs';
  import { ProductMenuComponent } from './product-menu.component';

  describe('ProductMenuComponent', () => {
    let component: ProductMenuComponent;
    let fixture: ComponentFixture<ProductMenuComponent>;
    let productsService: ProductsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ProductMenuComponent],
        imports: [HttpClientTestingModule],
        providers: [ProductsService],
      });
      fixture = TestBed.createComponent(ProductMenuComponent);
      component = fixture.componentInstance;
      productsService = TestBed.inject(ProductsService);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should toggle the menu', () => {
      expect(component.isOpen).toBe(false);
      component.toggleMenu();

      expect(component.isOpen).toBe(true);

      component.toggleMenu();
      expect(component.isOpen).toBe(false);
    });

    it('should hide the option to cancel the delete', () => {
      expect(component.confirmDelete).toBe(false);
      component.cancelDelete();

      expect(component.confirmDelete).toBe(true);

      component.cancelDelete();
      expect(component.confirmDelete).toBe(false);
    });

    const product = {
      id: '1',
      name: 'American coffee',
      price: 5,
      image: '',
      type: 'Breakfast',
      dateEntry: 'date',
    };

    it('should call deleteProduct and emit yesClicked event', () => {
      const deleteProductSpy = jest.spyOn(productsService, 'deleteProduct').mockReturnValue(of({} as productResponse));
      const yesClickedEmitSpy = jest.spyOn(component.yesClicked, 'emit');
    
      component.product = product;
      component.deleteProduct();
    
      expect(deleteProductSpy).toHaveBeenCalledWith(product.id);
      expect(yesClickedEmitSpy).toHaveBeenCalledWith(true);
    });
    
    it('should toggle the menu and emit productUpdated event', () => {
      const toggleMenuSpy = jest.spyOn(component, 'toggleMenu');
      const productUpdatedEmitSpy = jest.spyOn(component.productUpdated, 'emit');
    
      component.productWasUpdated();
    
      expect(toggleMenuSpy).toHaveBeenCalled();
      expect(productUpdatedEmitSpy).toHaveBeenCalledWith(true);
    }); 
  });
