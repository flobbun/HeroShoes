// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { ShoesService } from './services/shoes.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { UsComponent } from './us/us.component';
import { ItemComponent } from './item/item.component';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { ShopcartpaymentComponent } from './shopcartpayment/shopcartpayment.component';
import { ItemInPaymentComponent } from './item-in-payment/item-in-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainsectionComponent,
    CatalogueComponent,
    UsComponent,
    ItemComponent,
    FilterPipe,
    ShopcartComponent,
    ShopcartpaymentComponent,
    ItemInPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
