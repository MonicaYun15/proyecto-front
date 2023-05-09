import {Component, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";
import {BrandCarService} from "../../../../core/services/brand-car.service";

@Component({
  selector: 'app-info-mech-car',
  templateUrl: './info-mech-car.component.html',
  styleUrls: ['./info-mech-car.component.css']
})
export class InfoMechCarComponent implements OnInit {


  public infoMechForm: any;


  constructor(private controlContainer: ControlContainer) {

  }

  ngOnInit(): void {
    this.infoMechForm = this.controlContainer.control;
    this.infoMechForm = this.infoMechForm.controls["infoMechForm"];
  }
}
