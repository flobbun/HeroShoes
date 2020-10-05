import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInPaymentComponent } from './item-in-payment.component';

describe('ItemInPaymentComponent', () => {
  let component: ItemInPaymentComponent;
  let fixture: ComponentFixture<ItemInPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
