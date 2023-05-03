import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const { apiUrl } = environment;
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }


  public getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}/cars`)
  }

}
