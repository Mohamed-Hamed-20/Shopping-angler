import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Products';
  isScrolled = false;
  isLoggedIn: boolean = false;
  username: string = '';
  cartItemCount: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.isLoggedIn = true;
      this.username = userData.username;
    }

    this.cartService.counter.subscribe(count => {
      this.cartItemCount = count;
    })
  }

  logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    this.username = '';
  }
}
