import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productList: Producto[] | null = [];
  total= 0;
  constructor() { }

  ngOnInit(): void {
    let currentList = window.localStorage.getItem('cart');
    this.productList = currentList !== null ?  
    JSON.parse(currentList) : [];

    console.log(this.productList);
    if (this.productList){
      for(let i of this.productList ){
        this.total += Number(i.price);;
      }
    }
  }

}
