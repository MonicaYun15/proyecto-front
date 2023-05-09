import {Component, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";

@Component({
  selector: 'app-info-aesthetic-car',
  templateUrl: './info-aesthetic-car.component.html',
  styleUrls: ['./info-aesthetic-car.component.css']
})
export class InfoAestheticCarComponent implements OnInit {

  public infoAestheticForm: any;


  constructor(private controlContainer: ControlContainer) {

  }

  ngOnInit(): void {
    this.infoAestheticForm = this.controlContainer.control;
    this.infoAestheticForm = this.infoAestheticForm.controls["infoAestheticForm"];
  }

}
