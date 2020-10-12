import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

urlApi = `${environment.urlApi}/endereco`;

constructor(private httpClient: HttpClient) { }

getCEP(cepDigitado:any){
  return this.httpClient.get(`viacep.com.br/ws/${cepDigitado}/json/`)
}
}
