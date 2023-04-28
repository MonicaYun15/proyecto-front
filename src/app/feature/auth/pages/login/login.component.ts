import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../../core/utils/AppBaseComponent";
import {AuthLoginRequestDto} from "../../../../core/dto/authLoginRequestDto";
import {AuthService} from "../../../../core/services/auth.service";
import {lastValueFrom} from "rxjs";
import {TokenService} from "../../../../core/services/token.service";
import {ErrorsForm} from "../../../../core/enums/ErrorsForm";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBaseComponent {


  /**
   * Formulario reactivo de login
   */
  public loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private tokenService: TokenService) {
    super();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required ]
    });
  }


  public async signIn(): Promise<void> {

    let dtoLogin: AuthLoginRequestDto;

    if (this.loginForm.valid) {
      alert("todo correcto");
      let email = this.loginForm.get('email').value;
      let password = this.loginForm.get('password').value;

      dtoLogin = {
        "email": email,
        password
      }

      await lastValueFrom(this.authService.signIn(dtoLogin));

      console.log(this.tokenService.getToken());

      await this.router.navigateByUrl("/portafolio");


    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hay errores en el formulario, reviselo por favor'
      })
      console.log(this.getAllErrorsForm(this.loginForm));
      this.loginForm.markAllAsTouched();
    }

  }

 /* public signUp(): void {
    this.router.navigateByUrl("autenticacion/registro"); //navegacion mediante la clase Router
  }*/

  /**
   * Retorna mensaje de error de un campo del formulario
   * @param field
   */
  public getErrorForm(field: string): string {
    let message;

    if (this.isTouchedField(this.loginForm, field)) {
      if (this.loginForm.get(field).hasError('required')){
        message = ErrorsForm.REQUIRED;
      } else if (this.loginForm.get(field).hasError('email')) {
        message = ErrorsForm.EMAIL_FORMAT;
      }
    }

    return message;
  }

}
