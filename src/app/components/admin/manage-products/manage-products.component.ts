import { Component } from '@angular/core';
import { productResponse } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {

  products: productResponse[] = [];

  displayedColumns: string[] = ['id', 'product', 'price', 'type', 'actions'];


  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    this.productsService.getProducts()
    .subscribe((data) => {
      this.products = data;
    })
  }
}
