import { Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as globalVars from 'src/assets/globalVars';
import { ItemInPaymentComponent } from '../item-in-payment/item-in-payment.component';
import { IShoe } from '../i-shoe';

@Component({
  selector: 'app-shopcartpayment',
  templateUrl: './shopcartpayment.component.html',
  styleUrls: ['./shopcartpayment.component.scss']
})
export class ShopcartpaymentComponent implements OnInit {


@ViewChild('child') child: ItemInPaymentComponent;

cart: IShoe[] = [];

  constructor() {}

  ngOnInit(): void { this.cart = globalVars.cart; }
  ngAfterViewChecked(): void { this.cart = globalVars.cart; }



}
