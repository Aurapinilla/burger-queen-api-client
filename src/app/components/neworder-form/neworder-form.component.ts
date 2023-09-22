import { Component } from '@angular/core';
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

  clientName: string = ''; // Inicializa clientName como una cadena vacía
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
      console.log('Producto eliminado:', deletedProduct.product);
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
      products: orderedProductsArray,
      status: 'pending',
      dataEntry: new Date().toISOString()
    };

    this.ordersService.postOrder(newOrder)
    .pipe(
      catchError((error) => {
        // Maneja errores si ocurren al enviar la solicitud
        console.error('Error al crear la orden:', error);
        // Puedes realizar otras acciones de manejo de errores aquí
        return []; // Retorna un valor predeterminado o vacío en caso de error
      })
    )
    .subscribe(
      (response) => {
        // Maneja la respuesta del servidor si es necesario
        console.log('Orden creada exitosamente:', response);
        // Puedes realizar otras acciones aquí, como reiniciar la orden, etc.
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

