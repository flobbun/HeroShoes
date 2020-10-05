import { Component, EventEmitter, OnInit } from '@angular/core';
import * as globalVars from 'src/assets/globalVars';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

cart: any[];

  constructor() {

    this.cart = globalVars.cart;

   }

  ngOnInit(): void {  


  }

}
