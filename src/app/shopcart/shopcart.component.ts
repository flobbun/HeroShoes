import { Component, EventEmitter, OnInit } from '@angular/core';
import * as globalVars from 'src/assets/globalVars';
import { IShoe } from '../i-shoe';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

cart: IShoe[] = [];

  constructor() {

    this.cart = globalVars.cart;

   }

  ngOnInit(): void {  


  }

}
