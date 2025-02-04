import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/products';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemCount = new BehaviorSubject<number>(0);
  counter = this.cartItemCount.asObservable();

  constructor() {
    this.loadCartCount();
  }

  private loadCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItemCount.next(
      cart.reduce((acc: number, item: any) => acc + item.quantity, 0)
    );
  }

  addToCart(product: Product) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item: any) => item.id === product.id);

    if (productIndex === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      const availableStock = product.stock;
      if (cart[productIndex].quantity < availableStock) {
        cart[productIndex].quantity += 1;
      } else {
        Swal.fire({
          title: `Cannot add more. The available stock is ${availableStock} items.`,
          icon: 'warning',
          draggable: true,
          timer: 2000,
        });
        return;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartItemCount(cart);
  }

  updateCartItemCount(cart: any[]) {
    this.cartItemCount.next(
      cart.reduce((acc: number, item: any) => acc + item.quantity, 0)
    );
  }

  removeFromCart(productId: number) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter((item: any) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartItemCount(cart);
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItemCount.next(0);
  }
}
