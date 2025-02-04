import { Component, Input } from '@angular/core';
import { Product } from './../types/products';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [NgClass, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private router: Router, private cartService: CartService) {}

  navigateToProductDetail(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }

  addToCart(product: Product): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Please log in to add products to the cart.');
      return;
    }

    if (product.stock === 0) {
      alert('Sorry, this product is out of stock.');
      return;
    }

    this.cartService.addToCart(product);
  }
}
