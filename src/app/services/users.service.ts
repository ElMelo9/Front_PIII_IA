import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);

  constructor() { }


  //post request
  register(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>('http://127.0.0.1:4000/login', formValue)
    )

  }

  login(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>('http://127.0.0.1:4000/login', formValue)
    )

  }
}
