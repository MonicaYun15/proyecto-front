import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuardPruebaService} from "../core/services/guard-prueba.service";

const routes: Routes = [
  {
    path: "autenticacion",
    canActivate: [() => inject(GuardPruebaService).canActiveWithAuth()],
    loadChildren: () => import("./auth/auth.module").then(a => a.AuthModule)
  },
  {
    path: "portafolio",
    canActivate: [() => inject(GuardPruebaService).canActiveWithoutAuth()],
    loadChildren: () => import("./home/home.module").then(a => a.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
