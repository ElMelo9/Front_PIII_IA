import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  router = inject(Router);
  auth = inject(AuthService)
  
  form: FormGroup;

  constructor(private userService: UsersService) {
    
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      try {
        const response = await this.userService.login(this.form.value);
        if(!response.error) {
          
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
          this.auth.login(response.token)
          console.log(this.auth.getDecodedToken());
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    } else {
      console.error('Formulario inválido. Por favor, complete todos los campos correctamente.');
      // Puedes mostrar un mensaje al usuario indicando que el formulario es inválido
    }
  }

}
