import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrl: './login-home.component.css'
})
export class LoginHomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  registerForm = this.formBuilder.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmitLogin() {}
  onSubmitRegister() {}
}
