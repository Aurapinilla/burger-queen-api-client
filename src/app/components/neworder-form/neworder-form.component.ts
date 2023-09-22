import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { productResponse } from '../../interfaces/products.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ordersResponse } from '../../interfaces/orders.interface';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-neworder-form',
  templateUrl: './neworder-form.component.html',
  styleUrls: ['./neworder-form.component.css']
})
export class NeworderFormComponent {
  //sendOrder: FormGroup;
  orderedProducts: { product: productResponse, quantity: number }[] = [];

  //constructor(private formBuilder: FormBuilder, private ordersService: OrdersService) {
  ////  userId: sessionStorage.getItem('idUser'),
   // })
  //}

  addProduct(productInfo: { product: productResponse, quantity: number }) {
    this.orderedProducts.push(productInfo);
    console.log('Producto agregado:', productInfo);
  }

  deleteProduct(index: number) {
    if (index !== -1) {
      const deletedProduct = this.orderedProducts[index];
      this.orderedProducts.splice(index, 1);
      console.log('Producto eliminado:', deletedProduct.product);
    } else {
      console.log('Producto no encontrado');
    }
  }

  resetOrder() {
    this.orderedProducts = [];
  }

  get total () {
    let totalToPay = 0;
    for (const product of this.orderedProducts) {
      totalToPay += product.product.price * product.quantity;
    }
    return totalToPay;
  }
}

