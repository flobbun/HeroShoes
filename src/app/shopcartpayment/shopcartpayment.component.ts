import { Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as globalVars from 'src/assets/globalVars';
import { ItemInPaymentComponent } from '../item-in-payment/item-in-payment.component';

@Component({
  selector: 'app-shopcartpayment',
  templateUrl: './shopcartpayment.component.html',
  styleUrls: ['./shopcartpayment.component.scss']
})
export class ShopcartpaymentComponent implements OnInit {


@ViewChild('child') child: ItemInPaymentComponent;

cart = [];

  constructor() {}

  ngOnInit(): void {this.cart = globalVars.cart;}
  ngAfterViewChecked(): void {this.cart = globalVars.cart;}



}
