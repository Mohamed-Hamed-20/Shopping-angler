import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { authGuard } from './guard/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home',
  },
  {
    path: 'recipe-details/:id',
    component: RecipeDetailsComponent,
    title: 'Recipe Details',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registration',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'cart',
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not-Found',
  },
];
