import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from '../services/shoes.service';
import * as globalVars from 'src/assets/globalVars';


interface Shoe {
  name: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

@ViewChild("nItems") nItems: ElementRef;


  shoes: any[] = [];
  cart: any[];

  addItem(): any{
    let value: number = this.nItems.nativeElement.value;
    for (let i = 0; i < value; i++) {
      this.cart.push(this.shoes);
    }
    console.log(this.cart);
  }

  constructor(private route: ActivatedRoute, private _service: ShoesService, private renderer: Renderer2) { }


  ngOnInit(): void {


    this.cart = globalVars.cart;

    this.route.params.subscribe(params=>{
      this._service.getShoes()
      .subscribe((res: Shoe) => {
        this.shoes = res[params['id']];
      });
    })
  }

}
