import { Component } from '@angular/core';
import { Product } from './../types/products';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RecipeRequestsService } from '../services/recipe-requests.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  skip: number = 0;
  limit: number = 10;
  totalProducts: number = 0;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private recipeRequest: RecipeRequestsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.recipeRequest
      .getProducts(this.skip, this.limit)
      .subscribe((data) => {
        this.products = this.products.concat(data.products);
        this.totalProducts = data.total;
      });
  }

  loadMore(): void {
    this.skip += this.limit;
    this.loadProducts();
  }
}
