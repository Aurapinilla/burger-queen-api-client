import { Component, ViewChild } from '@angular/core';
import { productResponse } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../service/products.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductMenuComponent } from '../product-menu/product-menu.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  @ViewChild('addProductComponent') addProductComponent!: AddProductComponent;
  @ViewChild('productMenuComponent') productMenuComponent!: ProductMenuComponent;

  createNewProduct: boolean = false;

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

  newProductForm() {
    this.createNewProduct = true;
    this.addProductComponent.hideForm = false;
  }

  handleProductCreated(event: boolean){
    if(event === true) {
      this.showProducts();
    }
  }

  handleYesClicked(event: boolean) {
    if(event === true) {
      console.log('event received');
      this.showProducts();
    }
  }
}
