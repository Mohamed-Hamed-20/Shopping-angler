import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeRequestsService {

  constructor(private http: HttpClient) { }

  getProducts(skip: number = 0, limit: number = 10): Observable<any> {
    return this.http.get(`${environment.baseURL}/products?limit=${limit}&skip=${skip}`);
  }

  getProductDetails(productId: number): Observable<any> {
    return this.http.get(`${environment.baseURL}/products/${productId}`);
  }
}
