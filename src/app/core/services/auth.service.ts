import { Injectable } from '@angular/core';
import {AuthLoginRequestDto} from "../dto/authLoginRequestDto";
import {Observable, Subscription, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {AuthLoginResponseDto} from "../dto/authLoginResponseDto";
import {TokenService} from "./token.service";
const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private tokenService: TokenService) { }


  public signIn(authDto: AuthLoginRequestDto): Observable<AuthLoginResponseDto> {
       return this.http.post<AuthLoginResponseDto>(`${apiUrl}/auth/sign-in`, authDto).pipe(
        tap(response => {
          this.tokenService.saveToken(response.jwt);
        })
      );
  }
}
