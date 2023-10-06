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

  hideForm: boolean = false;

  newProductForm: FormGroup;

  @Output() productCreated = new EventEmitter<boolean>();

  productType: string[] = ['Breakfast', 'Lunch', 'Beverages', 'Sides'];
  selectedProdType: string = '';

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) {
    this.newProductForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      type: [this.selectedProdType, [Validators.required]],
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

    const nameValue = this.nameInput?.value;
    const priceValue = this.priceInput?.value;
    const typeValue = this.typeSelection?.value;

    const newProduct: productResponse = {
      id: '',
      name: nameValue,
      price: priceValue,
      image: '',
      type: typeValue,
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
