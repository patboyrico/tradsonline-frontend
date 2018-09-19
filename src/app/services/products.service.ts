import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Category } from '../models/category';
import { Vendor } from '../models/vendor';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  base_url = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{data: Product[]}>(this.base_url + 'products')
    .pipe(map(res => {
        return res.data;
    }));
  }

  getProduct(id) {
    this.http.get<Array<Object>>(this.base_url + 'products/' + id);
  }

  getCategory(id) {
    this.http.get<Array<Object>>(this.base_url + 'categories/' + id);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<{data: Category[]}>(this.base_url + 'categories')
    .pipe(map(res => {
      return res.data;
  }));
  }

  getCategoriesWithProducts() {
     return this.http.get(this.base_url + 'categories/categories-with-products');
  }

  getDiscountedProduct() {
    return this.http.get(this.base_url + 'products/discount');
 }

  getProductsByCategory(id) {
    return this.http.get(this.base_url + 'categories/products' + id);
  }

  getVendors(): Observable<Vendor[]> {
    return this.http.get<{data: Vendor[]}>(this.base_url + 'vendors')
    .pipe(map(res => {
      return res.data;
  }));
  }

  getVendor(id) {
    this.http.get(this.base_url + 'vendors' + id);
  }

  getProductsByVendor(id) {
    return this.http.get(this.base_url + 'vendors/products' + id);
  }
}
