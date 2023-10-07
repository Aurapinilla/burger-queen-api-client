import { Component, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { productResponse } from 'src/app/interfaces/products.interface';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent {
  @ViewChild('editProductComponent') editProductComponent!: EditProductComponent;
  @Input() product!: productResponse;
  @Output() yesClicked = new EventEmitter<boolean>();
  @Output() productUpdated = new EventEmitter<boolean>();
  isOpen = false;
  confirmDelete = false;

  constructor(private productsService: ProductsService) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  cancelDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.product.id)
      .subscribe((productDeleted) => {
        this.yesClicked.emit(true);
      },
        (error) => {
          console.error('Error deleting user:', error)
      });
  }

  productWasUpdated() {
    this.toggleMenu();
      this.productUpdated.emit(true);
  }
}
