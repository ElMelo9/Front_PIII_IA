import { Injectable,inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpClient = inject(HttpClient);


  constructor() { }

    //post request
    setData(formValue: any){
      const headers = this.createHeaders();
      return firstValueFrom(
        this.httpClient.post<any>('http://127.0.0.1:4000/crear_dato', formValue,{ headers })
      )
    }
  
    getData(){
      const headers = this.createHeaders();
      return firstValueFrom(
        this.httpClient.get<any>('http://127.0.0.1:4000/obtener_datos',{ headers })
      )  
    }
    
  // Create headers with authorization token

  private createHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }

}
