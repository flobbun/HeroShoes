import { Component, Input, OnInit, ViewChild, ComponentRef, ElementRef, Renderer2 } from '@angular/core';
import * as globalVars from 'src/assets/globalVars';
import { IShoe } from '../i-shoe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-in-payment',
  templateUrl: './item-in-payment.component.html',
  styleUrls: ['./item-in-payment.component.scss']
})
export class ItemInPaymentComponent implements OnInit {

@ViewChild('item') item: ElementRef;
@ViewChild('bRemove') bRemove: ElementRef;

@Input() id: number;
@Input() shoe: IShoe;


removeItem(): void{
  const index = globalVars.cart.indexOf(this.id);
  globalVars.cart.splice(index);
  this.item.nativeElement.remove();
  
  this.shoe = null;
  this.router.navigate(['catalogue']);

  setTimeout(() => {
    this.router.navigate(['shopcartpayment']);
  }, 10);
}




  constructor(public el: ElementRef, public renderer: Renderer2, public router: Router) {}

  ngOnInit(): void {
    // console.log(this.id);

  }



}
