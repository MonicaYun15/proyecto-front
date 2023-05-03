import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("entre al interceptor");

    let headers;

    let token = this.tokenService.getToken()

    if (token) {

      headers = {
        'Authorization': 'Bearer '+token,
        'Access-Control-Allow-Origin': '*'
      }

      let authRequest = request.clone({
        setHeaders: {
          ...headers
        }
      });
      console.log(authRequest)
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
