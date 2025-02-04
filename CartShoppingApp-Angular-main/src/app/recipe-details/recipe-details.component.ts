import { Component, Input } from '@angular/core';
import { Product } from '../types/products';
import { CalculateDiscountPipe } from '../pipe/calculate-discount.pipe';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeRequestsService } from '../services/recipe-requests.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CalculateDiscountPipe, CommonModule, NotFoundComponent],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  product: Product | undefined;

  constructor(
    public activatedRoute: ActivatedRoute,
    private recipeRequestService: RecipeRequestsService,
    private cartService: CartService
  ) {}

  selectedImages: { [productId: number]: string } = {};
  selectImage(productId: number, image: string): void {
    this.selectedImages[productId] = image;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const param_id = params['id'];
      this.recipeRequestService
        .getProductDetails(param_id)
        .subscribe(res => this.product = res);
    });
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
