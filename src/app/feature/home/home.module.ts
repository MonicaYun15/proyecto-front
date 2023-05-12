import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderNavComponent,
    ShoppingCartComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
