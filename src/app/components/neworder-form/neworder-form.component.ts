import { Component, Input, EventEmitter } from '@angular/core';
import { productResponse } from '../../interfaces/products.interface';

@Component({
  selector: 'app-neworder-form',
  templateUrl: './neworder-form.component.html',
  styleUrls: ['./neworder-form.component.css']
})
export class NeworderFormComponent {

  orderedProducts: { product: productResponse, quantity: number }[] = [];

  addProduct(productInfo: { product: productResponse, quantity: number }) {
    this.orderedProducts.push(productInfo);
    console.log('Producto agregado:', productInfo);
  }
}

