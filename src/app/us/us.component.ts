import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    const fast = this.elRef.nativeElement.querySelector('#fast');
    const quality = this.elRef.nativeElement.querySelector('#quality');
    const trust = this.elRef.nativeElement.querySelector('#trust');

    window.addEventListener('scroll', scrollDetect);

    function scrollDetect(): void{
      if (window.scrollY > 590 && window.scrollY < 700){

        fast.style.display = 'inline';
        quality.style.display = 'inline';
        trust.style.display = 'inline';

        fast.style.animation = 'fadeInLeft 1s forwards';
        quality.style.animation = 'fadeInLeft 1s forwards';
        trust.style.animation = 'fadeInLeft 1s forwards';

        window.removeEventListener('scroll', scrollDetect);
    }
  }
  }






  }


