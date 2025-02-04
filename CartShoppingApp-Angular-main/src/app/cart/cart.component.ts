import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, NotFoundComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  navigateToProductDetail(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }

  ngOnInit(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getShippingCost(): number {
    return 2.99;
  }

  getTax(): number {
    return this.getTotalPrice() * 0.1;
  }

  getGrandTotal(): number {
    return this.getTotalPrice() + this.getShippingCost() + this.getTax();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  updateQuantity(productId: number, newQuantity: number): void {
    const productIndex = this.cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1 && newQuantity >= 0) {
      this.cart[productIndex].quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.cartService.updateCartItemCount(this.cart);
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
  }
}
