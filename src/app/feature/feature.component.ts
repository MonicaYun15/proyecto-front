import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    //this.router.navigateByUrl("/portafolio").then();
  }





}
