import { MeuFormComponent } from './../formulario/meu-form/meu-form.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private httpClient: HttpClient) { }

  public enderecoApi(cep: any) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  public salvarEndereco(id, body) {
    return this.httpClient.patch ( `http://localhost:8081/enderecos/${id}`, body);
  }
}
