import { Component, OnInit, Renderer2 } from '@angular/core';
import { ShoesService } from '../services/shoes.service';
import * as globalVars from 'src/assets/globalVars';

import { IShoe } from 'src/app/i-shoe';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

shoes: IShoe[];
filterSearch = '';




  constructor(private _service: ShoesService, private renderer: Renderer2) {}


  ngOnInit(): void {
    this._service.getShoes()
    .subscribe((res: any) => {
      this.shoes = res;
    });




  }



}


