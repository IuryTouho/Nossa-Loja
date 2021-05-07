import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  //constructor() { }

  addToCart(product: IProduct) {
    //this.items.push(product);
    this.items
  }

  getItem() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
