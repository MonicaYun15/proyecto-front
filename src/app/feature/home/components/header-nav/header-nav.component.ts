import { Component } from '@angular/core';
import {TokenService} from "../../../../core/services/token.service";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {


  public nameCustomer: string;

  public emailCustomer: string;


  constructor(private tokenService: TokenService) {
    this.nameCustomer = this.tokenService.getInfoToken().fullname;
    this.emailCustomer = this.tokenService.getInfoToken().email;
  }

}
