import { Component } from '@angular/core';
import {PurchaseService} from "../../../../core/services/purchase.service";
import {TokenService} from "../../../../core/services/token.service";
import Swal from "sweetalert2";
import {CarsPurchaseDto} from "../../../../core/dto/carsPurchaseDto";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent {

  public historyPurchases: Array<any>;

  public carsPurchases: Array<CarsPurchaseDto>;

  constructor(private purchaseService: PurchaseService, private tokenService: TokenService) {
    this.purchaseService.getAllPurchaseByIdCustomer(this.tokenService.getInfoToken().cardId).subscribe({
      next: value => {
        this.historyPurchases = value;
      }
    });
  }


  public showListCarsPurchase(carsPurchase: Array<CarsPurchaseDto>): void {
    this.carsPurchases = carsPurchase;
  }


}
