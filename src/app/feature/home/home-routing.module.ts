import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {PurchaseHistoryComponent} from "./pages/purchase-history/purchase-history.component";

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
  },
  {
    path: "carrito",
    component: ShoppingCartComponent
  },
  {
    path: "historial-compras",
    component: PurchaseHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
