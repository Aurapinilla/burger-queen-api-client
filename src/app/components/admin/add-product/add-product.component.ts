import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productResponse } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Output() productCreated = new EventEmitter<boolean>();
  hideForm: boolean = false;
  newProductForm: FormGroup;
  productType: string[] = ['Breakfast', 'Lunch', 'Beverages', 'Sides'];

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) {
    this.newProductForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  hideProductForm() {
    this.hideForm = true;
  }

  get nameInput() {
    return this.newProductForm.get('name');
  }

  get priceInput() {
    return this.newProductForm.get('price');
  }

  get typeSelection() {
    return this.newProductForm.get('type');
  }

  async save(event: Event) {
    event.preventDefault();

    const newProduct: productResponse = {
      id: '',
      name: this.nameInput?.value,
      price: this.priceInput?.value,
      image: '',
      type: this.typeSelection?.value,
      dateEntry: new Date().toISOString(),
    }

    this.productsService.postProducts(newProduct)
    .subscribe((product) => {
      console.log('product created:', product);
      this.productCreated.emit(true);
    })
    this.hideForm = true;
    this.newProductForm.reset();
  }
}
