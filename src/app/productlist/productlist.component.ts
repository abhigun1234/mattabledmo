import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productDetails
  constructor(public prodService: ProductService) { }

  ngOnInit() {
  }
  getProductList()
  {
    this.productDetails=this.prodService.getProducts()
  }

}
