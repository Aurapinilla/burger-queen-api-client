import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { productResponse } from '../../interfaces/products.interface';
import { NeworderFormComponent } from '../../components/neworder-form/neworder-form.component'

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {
  @ViewChild('newOrderForm') newOrderForm!: NeworderFormComponent;

  @Output() productQuantitiesChange = new EventEmitter<number[]>();
  productQuantities: number[] = [];

  products: productResponse[] = [];
  filteredProducts: productResponse[] = [];
  isBreakfastSelected: boolean = true;
  total: number = 0;

  @Output() productAdded = new EventEmitter<{ quantity: number, product: productResponse }>();

  constructor(private productService: ProductsService) { }

  ngOnInit() { }

  filterProductByType(type: string): productResponse[] {
    return this.products.filter((product) => {
      return product.type === type;
    });
  }

  breakfastMenu() {
    this.productService.getProducts()
      .subscribe({
        next: (result) => {

          this.products = result;
          this.filteredProducts = this.filterProductByType('Breakfast');
          this.productQuantities = new Array(this.filteredProducts.length).fill(0);
        },
        error: (err) => {
          console.error(err);
          console.log('Error loading products');
        }
      })
  }

  lunchAndDinnerMenu() {
    this.productService.getProducts()
      .subscribe({
        next: (result) => {

          this.products = result;
          this.filteredProducts = this.filterProductByType('Lunch');
          this.isBreakfastSelected = false;
          this.productQuantities = new Array(this.filteredProducts.length).fill(0);
        },
        error: (err) => {
          console.error(err);
          console.log('Error loading products');
        }
      })
  }

  //eliminar producto de order summary si con el boton de - cantidad se llega a 0
  //removeItemsWithZeroQuantity() {
  //  this.newOrderForm.orderedProducts = this.newOrderForm.orderedProducts.filter(item => item.quantity !== 0);
  //}

  decreaseQuantity(index: number, product: productResponse) {
    if (this.productQuantities[index] > 0) {
      this.productQuantities[index]--;
      this.addProductToOrder(this.productQuantities[index], product);
    }
   // else {
   //   this.removeItemsWithZeroQuantity();
   // }
  }

  increaseQuantity(index: number, product: productResponse) {
    this.productQuantities[index]++;
    this.addProductToOrder(this.productQuantities[index], product);
  }

  addProductToOrder(quantity: number, product: productResponse) {

    const existingProduct = this.newOrderForm.orderedProducts.find(item => item.product.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = quantity;
    } else {
      this.newOrderForm.addProduct({ quantity, product });
    }

    console.log('Evento emitido:', { quantity, product });
  }

  resetQuantity(name: string) {
    console.log('name received', name);
    const product = this.filteredProducts.find((p) => p.name === name);
    console.log('match prod', product);
    
    if (product) {
      const index = this.filteredProducts.indexOf(product);

      this.productQuantities[index] = 0;

    } else {
      console.log('product not found');
    }
  }

  resetProductQuantities() {
    this.productQuantities.fill(0);
  }
}
