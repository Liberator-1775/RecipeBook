import { Component, OnInit } from '@angular/core';
import {ProductList} from "../products-list";
import {Products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  productListInfo = ProductList;
  selectedProducts?: Products;
  result: any[] = [];

  ngOnInit() {
    this.showProductList();
    console.log(localStorage);
  }

  getProduct(item: Products) : void{
    this.selectedProducts = item;
    localStorage.setItem(item.id.toString(), item.name);
    localStorage.setItem(item.name, item.price.toString());
    console.log(this.result);
    }

    getProductPrice(item: string) : string  | null{
    return localStorage.getItem(item);
    }

    showProductList(){
      for(let i=localStorage.length; i>0; i--) {
        let key = localStorage.key(i);
        this.result.push(localStorage.getItem(key!));
      }
    }

}
