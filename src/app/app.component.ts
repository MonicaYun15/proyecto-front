import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coches-curso-front';

  constructor(private router: Router) {
    this.router.navigateByUrl("/autenticacion/inicio-sesion");
  }
}
