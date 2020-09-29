import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './style.css'
  ],
})
export class HeaderComponent implements OnInit {
  title: any = 'HeroShoes';

  constructor() { }

  ngOnInit(): void {
  }

}
