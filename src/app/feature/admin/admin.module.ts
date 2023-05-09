import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterCarComponent } from './pages/register-car/register-car.component';
import { InfoBasicCarComponent } from './components/info-basic-car/info-basic-car.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InfoMechCarComponent } from './components/info-mech-car/info-mech-car.component';
import { InfoAestheticCarComponent } from './components/info-aesthetic-car/info-aesthetic-car.component';


@NgModule({
  declarations: [
    RegisterCarComponent,
    InfoBasicCarComponent,
    InfoMechCarComponent,
    InfoAestheticCarComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
