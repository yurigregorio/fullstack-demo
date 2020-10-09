import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthToken } from './model/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = `${environment.urlApi}/autenticacao`;

  constructor(private http: HttpClient) { }

  public login( credential : Credential ){
    return this.http.post<AuthToken>( this.url, credential );
  }
}
