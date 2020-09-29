import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartpaymentComponent } from './shopcartpayment.component';

describe('ShopcartpaymentComponent', () => {
  let component: ShopcartpaymentComponent;
  let fixture: ComponentFixture<ShopcartpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcartpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
