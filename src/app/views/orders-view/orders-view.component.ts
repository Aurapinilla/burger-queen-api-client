import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { productResponse } from '../../interfaces/products.interface';
import { NeworderFormComponent } from '../../components/neworder-form/neworder-form.component'

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})

export class OrdersViewComponent implements AfterViewInit {
  @ViewChild('newOrderForm') newOrderForm!: NeworderFormComponent;

  @Output() productQuantitiesChange = new EventEmitter<number[]>();
  productQuantities: number[] = [];

  products: productResponse[] = [];
  filteredProducts: productResponse[] = [];
  isBreakfastSelected: boolean = true;
  total: number = 0;

  @Output() productAdded = new EventEmitter<{ quantity: number, product: productResponse }>();

  constructor(private productService: ProductsService) { };

  ngAfterViewInit() {
    if (this.newOrderForm) {
      // newOrderForm está inicializado
      // Puedes realizar acciones relacionadas con newOrderForm aquí
    }
  }

  breakfastMenu() {
    this.productService.getProducts()
      .subscribe({
        next: (result) => {

          this.products = result;
          this.filteredProducts = this.products.filter(product => product.type === 'Breakfast');
          this.filteredProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
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
          this.filteredProducts = this.products.filter(product => product.type !== 'Breakfast');
          this.filteredProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          this.isBreakfastSelected = false;
          this.productQuantities = new Array(this.filteredProducts.length).fill(0);
        },
        error: (err) => {
          console.error(err);
          console.log('Error loading products');
        }
      })
  };

  decreaseQuantity(index: number, product: productResponse) {
    if (this.productQuantities[index] > 0) {
      this.productQuantities[index]--;
      this.addProductToOrder(this.productQuantities[index], product);
    }
  };

  increaseQuantity(index: number, product: productResponse) {
    this.productQuantities[index]++;
    this.addProductToOrder(this.productQuantities[index], product);
  };

  addProductToOrder(quantity: number, product: productResponse) {

    const existingProduct = this.newOrderForm.orderedProducts.find(item => item.product.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = quantity;
    } else {
      this.newOrderForm.addProduct({ quantity, product });
    }
  };

  resetQuantity(name: string) {
    const product = this.filteredProducts.find((p) => p.name === name);

    if (product) {
      const index = this.filteredProducts.indexOf(product);

      this.productQuantities[index] = 0;

    }
  };

  resetProductQuantities() {
    this.productQuantities.fill(0);
  };
}
