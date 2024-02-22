import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductShareService {
  private products = new BehaviorSubject<Product[]>([]);

  constructor() {}

  getProducts() {
    return this.products.asObservable();
  }

  addProduct(newProduct: Product) {
    const currentProducts = this.products.value;
    const updatedProducts = [...currentProducts, newProduct];
    this.products.next(updatedProducts);
  }
  removeFromCart(index : number) {
    const currVal = this.products.value;
    currVal.splice(index, 1);
    console.log(currVal);
    this.products.next(currVal);
  }
}
