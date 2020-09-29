import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import * as globalVars from 'src/assets/globalVars';

@Component({
  selector: 'app-shopcartpayment',
  templateUrl: './shopcartpayment.component.html',
  styleUrls: ['./shopcartpayment.component.scss']
})
export class ShopcartpaymentComponent implements OnInit {

@ViewChild("item") item: ElementRef;

removeItem(){
  this.item.nativeElement.remove();
}

cart: any[];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {

    this.cart = globalVars.cart;

  }

}
