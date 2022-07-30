import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.apiURL;
  token: string | undefined;

  constructor(private http: HttpClient, private router:Router) { }

  buscaCard(user: any): Observable<any> 
  {
    alert(user)
    return this.http.get(`${this.apiURL}id`);
  }
  
}
