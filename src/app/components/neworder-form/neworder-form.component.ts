import { Component, Output, Input, EventEmitter } from '@angular/core';
import { productResponse } from '../../interfaces/products.interface';
import { ordersResponse } from '../../interfaces/orders.interface';
import { OrdersService } from '../../service/orders.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-neworder-form',
  templateUrl: './neworder-form.component.html',
  styleUrls: ['./neworder-form.component.css']
})
export class NeworderFormComponent {
  @Input() productQuantities: number[] = [];
  @Output() createOrderClicked = new EventEmitter<void>();
  @Output() deletedProductClicked = new EventEmitter<any>();
  clientName: string = '';
  tableNumber: string = '';

  orderedProducts: { product: productResponse, quantity: number }[] = [];

  constructor(private ordersService: OrdersService) {}

  addProduct(productInfo: { product: productResponse, quantity: number }) {
    this.orderedProducts.push(productInfo);
    console.log('Producto agregado:', productInfo);
  }

  deleteProduct(index: number) {
    if (index !== -1) {
      const deletedProduct = this.orderedProducts[index];
      this.orderedProducts.splice(index, 1);
      this.deletedProductClicked.emit(index);
      console.log('Producto eliminado');
    } else {
      console.log('Producto no encontrado');
    }
  }

  createOrder() {
    const orderedProductsArray = this.orderedProducts.map(item => ({
      qty: item.quantity,
      product: item.product
    }));

    const newOrder: ordersResponse = {
      id: 0,
      userId: (sessionStorage.getItem('idUser') || ''),
      client: this.clientName,
      table: this.tableNumber,
      products: orderedProductsArray,
      status: 'pending',
      dataEntry: new Date().toISOString(),
      timer: 0,
    };

    this.createOrderClicked.emit();
    this.ordersService.postOrder(newOrder)
    .pipe(
      catchError((error) => {
        console.error('Error al crear la orden:', error);
    
        return [];
      })
    )
    .subscribe(
      (response) => {
        
        console.log('Orden creada exitosamente:', response);
        
      }
    );
  }

  resetOrder() {
    this.orderedProducts = [];
    this.clientName = '';
    this.tableNumber = '';
  }

  get total () {
    let totalToPay = 0;
    for (const product of this.orderedProducts) {
      totalToPay += product.product.price * product.quantity;
    }
    return totalToPay;
  }
}