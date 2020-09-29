import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: [ './style.css',
  ]
})
export class MainsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {





    $('.carousel').carousel({
      interval: 4000
    })
    
  }
}



