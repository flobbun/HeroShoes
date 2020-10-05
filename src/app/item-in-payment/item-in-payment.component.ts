import { Component, Input, OnInit, ViewChild, ComponentRef, ElementRef, Renderer2 } from '@angular/core';
import * as globalVars from 'src/assets/globalVars';

@Component({
  selector: 'app-item-in-payment',
  templateUrl: './item-in-payment.component.html',
  styleUrls: ['./item-in-payment.component.scss']
})
export class ItemInPaymentComponent implements OnInit {

@ViewChild('item') item: ElementRef;
@ViewChild('bRemove') bRemove: ElementRef;

@Input() id: number;
@Input() shoe: Array<any>;


removeItem(): void{
  let index = globalVars.cart.indexOf(this.id);
  globalVars.cart.splice(index);
  this.item.nativeElement.remove();
  console.log(globalVars.cart);

  this.shoe = null;


}

  


  constructor(public el: ElementRef, public renderer: Renderer2) { 



  }

  ngOnInit(): void {


    console.log(this.id);
  }

 

}
