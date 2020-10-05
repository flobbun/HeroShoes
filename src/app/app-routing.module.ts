import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { UsComponent } from './us/us.component';
import { ItemComponent } from './item/item.component';
import { ShopcartpaymentComponent } from './shopcartpayment/shopcartpayment.component';

/*------Routes------*/
const routes: Routes = [
  {path: 'home', component: MainsectionComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'us', component: UsComponent},
  {path: 'shopcartpayment', component: ShopcartpaymentComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];
/*----------------*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
