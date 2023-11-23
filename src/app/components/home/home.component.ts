import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userData: any | null;

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
        // Obtener los datos decodificados del token al iniciar el componente
        this.userData = this.authService.getDecodedToken();
        console.log(this.userData);


  }

}
