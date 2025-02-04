import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    return true;
  } else {
    alert('You must log in to add products to the cart!');
    return false;
  }
};
