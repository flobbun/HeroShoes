import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from '../services/shoes.service';
import * as globalVars from 'src/assets/globalVars';
import { IShoe } from 'src/app/i-shoe';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

// ========== VARS =========== //

@ViewChild("nItems") nItems: ElementRef;




shoes: IShoe;
cart: IShoe[];



// =========================== //

  addItem(): any{
    let value: number = this.nItems.nativeElement.value;
    for (let i = 0; i < value; i++) {
      this.cart.push(this.shoes);
    }

  }

  constructor(private route: ActivatedRoute, private _service: ShoesService) { }


  ngOnInit(): void {
    this.cart = globalVars.cart;


    this.route.params.subscribe(params=>{
      this._service.getShoes()
      .subscribe((res: IShoe) => {
        this.shoes = res[params['id']];
      });
    })
  }




}


