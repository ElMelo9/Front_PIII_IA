import { Component,inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //injectando el servicio para utilizarlo  
  userService = inject(UsersService)

  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()

    });

  }

  async onSubmit(){
    const response = await this.userService.register(this.form.value);
    console.log(response)

  }

}
