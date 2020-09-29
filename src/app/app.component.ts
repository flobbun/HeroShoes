import { Component, OnInit  } from '@angular/core';
import * as globalVars from '../assets/globalVars';

declare let particlesJS: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  public ngOnInit(): void {
    this.cart = globalVars.cart;
  }




  cart = [];
  title = 'HeroShoes';

}
/*********[**************/



let index = 2;



/***********************/



setInterval(() => {
    document.body.style.backgroundImage = `url('./assets/img/bg${index}.jpg')`;
    document.body.classList.toggle('bg-image');
    if( index < 4 )
    {
       index++; 
    }
    else
    {
      index = 1; 
    } 
}, 8000);