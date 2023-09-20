import { Component, Input, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { productResponse } from '../../interfaces/products.interface';
import { NeworderFormComponent } from '../../components/neworder-form/neworder-form.component'
import { ordersResponse } from '../../interfaces/orders.interface'

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit{
  @ViewChild('newOrderForm') newOrderForm!: NeworderFormComponent;

  products: productResponse[] = [];
  filteredProducts: productResponse[] = [];
  isBreakfastSelected: boolean = true;
  @Input() clientName!:string; //Agregar campos al form
  @Input() tableNumber!:string;
  productQuantities: number[] = [];
  total: number = 0;

  @Output() productAdded = new EventEmitter<{quantity: number, product: productResponse}>();
  
  constructor(private productService: ProductsService) {}

  ngOnInit() {}

  // método para filtrar productos por tipo
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

  addProductToOrder(quantity: number, product: productResponse) {
    this.newOrderForm.addProduct({ quantity, product });

    console.log('Evento emitido:', { quantity, product });
  }
  
}
