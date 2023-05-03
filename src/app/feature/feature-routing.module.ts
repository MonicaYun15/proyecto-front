import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuardAuthService} from "../core/services/guard-auth.service";

const routes: Routes = [
  {
    path: "autenticacion",
    canActivate: [() => inject(GuardAuthService).canActiveWithAuth()],
    loadChildren: () => import("./auth/auth.module").then(a => a.AuthModule)
  },
  {
    path: "portafolio",
    canActivate: [() => inject(GuardAuthService).canActiveWithoutAuth()],
    loadChildren: () => import("./home/home.module").then(a => a.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
