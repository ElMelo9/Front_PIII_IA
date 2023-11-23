import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  
  userRole: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.userRole = this.authService.getUserRole();

    if (this.userRole == 1) {
      // Habilitar funcionalidades específicas para administradores
    } else if (this.userRole == 2) {
      // Habilitar funcionalidades específicas para usuarios
    }
    // ...
  }

  salir(){
    this.authService.logout();
  }


}
