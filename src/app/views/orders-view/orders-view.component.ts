import { Component, OnInit } from '@angular/core';
import { ProductsService, productResponse } from '../../service/products.service';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit{
  products: productResponse[] = [];
  filteredProducts: productResponse[] = [];
  isBreakfastSelected: boolean = true;
  
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
      },
      error: (err) => {
        console.error(err);
        console.log('Error loading products');
      }
    })
  }
}
