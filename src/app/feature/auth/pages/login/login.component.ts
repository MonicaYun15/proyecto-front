import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../../core/utils/AppBaseComponent";
import {AuthLoginRequestDto} from "../../../../core/dto/authLoginRequestDto";
import {AuthService} from "../../../../core/services/auth.service";

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

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    super();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required ]
    });
  }


  public signIn(): void {

    let dtoLogin: AuthLoginRequestDto;

    if (this.loginForm.valid) {
      alert("todo correcto");
      let email = this.loginForm.get('email').value;
      let password = this.loginForm.get('password').value;

      dtoLogin = {
        "email": email,
        password
      }

      this.authService.signIn(dtoLogin).subscribe(value => {
        console.log("voy a mostrarme despues")
        console.log(value);
      });

      console.log("se va a mostrar antes que el subscribe");

    } else {
      alert("hay errores en el formulario")
      console.log(this.getAllErrorsForm(this.loginForm));
    }

  }

 /* public signUp(): void {
    this.router.navigateByUrl("autenticacion/registro"); //navegacion mediante la clase Router
  }*/

  public getErrorForm(field: string): string {
    let message;

    if (this.isTouchedField(this.loginForm, field)) {
      if (this.loginForm.get(field).hasError('required')){
        message = 'El campo es requerido';
      } else if (this.loginForm.get(field).hasError('email')) {
        message = 'Requiere el formato de email';
      }
    }

    return message;
  }

}
