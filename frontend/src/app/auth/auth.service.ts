import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthToken } from './model/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = `${environment.urlApi}/autenticacao`;
  /**ele é o intermediário */
  public authSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public login( credential : Credential ){
    return this.http.post<AuthToken>( this.url, credential );
  }

  public sendMessage(msg : boolean){
    this.authSubject.next(msg);
  }
}
