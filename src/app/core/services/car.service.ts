import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CarDto} from "../dto/carDto";
import {CarsPurchaseDto} from "../dto/carsPurchaseDto";
const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private numberProducts = new BehaviorSubject(0);
  public readonly getNumberProducts: Observable<any> = this.numberProducts.asObservable();

  constructor(private http: HttpClient) {
    this.setNumberProducts();
  }


  public getAllCars(): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(`${apiUrl}/cars`);
  }

  public registerCar(newCar: CarDto): Observable<CarDto> {
    return this.http.post<CarDto>(`${apiUrl}/cars`, newCar);
  }

  public setNumberProducts(): void {
    let count: number = 0;
    let carsPurchase: Array<CarsPurchaseDto> = JSON.parse(localStorage.getItem("carsPurschase"));

    if (!carsPurchase) {
      this.numberProducts.next(0);
      return;
    }

    console.log("esto es nulo", carsPurchase);
    carsPurchase.forEach(car => count += car.quantity );
    this.numberProducts.next(count);
  }

}
