import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderNavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
