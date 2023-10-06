import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent {
  isOpen = false;
  confirmDelete = false;

  @Input() productId!: string;
  @Output() yesClicked = new EventEmitter<boolean>();

  constructor(private productsService: ProductsService) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  cancelDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.productId)
      .subscribe((productDeleted) => {
        console.log('userDeleted:', productDeleted);
        this.yesClicked.emit(true);
      },
        (error) => {
          console.error('Error deleting user:', error)
      });
  }
}
