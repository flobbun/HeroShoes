import { Component, OnInit } from '@angular/core';
import * as globalVars from 'src/assets/globalVars';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

cart: any[];

  constructor() { 
  }

  ngOnInit(): void {
    this.cart = globalVars.cart;
  }

}
