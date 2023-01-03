import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface products {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})

export class AddtocartService {
  data: products[] = [{ id: 1, name: 'Oppo A31', price: 11990, amount: 1 },
  { id: 2, name: 'IPhone 12', price: 65000, amount: 1 },
  { id: 3, name: 'Vivo X60', price: 40000, amount: 1 },
  { id: 4, name: 'IPhone 13 Pro Max', price:130000, amount: 1 },];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor() { }

  // getProducts() {
  //   return this.data;
  // }
  getCart(data) {
    this.cart.push(data);
    console.log('data added',this.cart);
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.getCartItemCount();
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        // p.amount -= 1;
        if (p.amount > 1) {
          p.amount--;
        }
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  // clearCart() {
  //   this.cart.length = 0;
  // }
}
