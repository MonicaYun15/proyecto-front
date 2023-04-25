import { Injectable } from '@angular/core';
import {AuthLoginRequestDto} from "../dto/authLoginRequestDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {AuthLoginResponseDto} from "../dto/authLoginResponseDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  public signIn(authDto: AuthLoginRequestDto): Observable<AuthLoginResponseDto> {
    return this.http.post<AuthLoginResponseDto>(this.apiUrl+"/auth/sign-in", authDto);
  }
}
