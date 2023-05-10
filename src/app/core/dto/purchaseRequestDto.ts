import {CarsPurchaseDto} from "./carsPurchaseDto";

export interface PurchaseRequestDto {


  cardIdCustomer: string;

  date: Date;

  total: number;

  paymentMethod: string;

  carsPurchase: Array<CarsPurchaseDto>;
}
