import {Component, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";
import {BrandCarDto} from "../../../../core/dto/brandCarDto";
import {BrandCarService} from "../../../../core/services/brand-car.service";

@Component({
  selector: 'app-info-basic-car',
  templateUrl: './info-basic-car.component.html',
  styleUrls: ['./info-basic-car.component.css']
})
export class InfoBasicCarComponent implements OnInit {

  public infoBasicForm: any;

  public listBrandCar: BrandCarDto[];


  constructor(private controlContainer: ControlContainer,
              private brandCarService: BrandCarService) {
    this.brandCarService.getAllBrandsCar().subscribe({
      next: value => this.listBrandCar = value
    })
  }

  ngOnInit(): void {
    this.infoBasicForm = this.controlContainer.control;
    this.infoBasicForm = this.infoBasicForm.controls["infoBasicForm"];
  }

}
