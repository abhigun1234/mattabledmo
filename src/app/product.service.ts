import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productDetails=[{'id':'1','name':'addidas',price:'1234'},
  {'id':'2','name':'nike',price:'1234'}]
  constructor() { }
  public getProducts()
  {

    return this.productDetails
  }
}
