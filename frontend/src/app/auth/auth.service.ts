import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) { }

public logar(body:any){
  return this.httpCliente.post('http://localhost:8081/autenticacao', body);
}

}
