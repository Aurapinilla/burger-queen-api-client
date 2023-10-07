import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productResponse } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product!: productResponse;
  @Output() productUpdated = new EventEmitter<boolean>();
  @Output() cancelEdit = new EventEmitter<boolean>();

  updateProductForm!: FormGroup;
  productUpdatedData!: productResponse;
  hideForm: boolean = true;
  productType: string[] = ['Breakfast', 'Lunch', 'Beverages', 'Sides'];

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {}

  ngOnInit() {
    // Inicializar el formulario con los datos del producto actual
    this.updateProductForm = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      type: [this.product.type, Validators.required],
    });
  }

  hideupdateProductForm() {
    this.hideForm = !this.hideForm;
  }

  get nameInput() {
    return this.updateProductForm.get('name');
  }

  get priceInput() {
    return this.updateProductForm.get('price');
  }

  get typeSelection() {
    return this.updateProductForm.get('type');
  }

  async save(event: Event) {
    const updatedProductData = this.updateProductForm.value;

    this.productsService.updateProduct(this.product.id, updatedProductData)
      .subscribe((response) => {
       console.log('user updated', response);
       this.hideForm = !this.hideForm;
       this.productUpdated.emit(true);
      });
  }
}
