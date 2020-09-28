import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // Http Cliente = um serviço. Pertence ao módulo HttpClienteModule
  constructor(private httpClient: HttpClient) { }

  mostrarMensagem(){
    alert('Minha mensagem');
  }

  getAllAlunosApi(){
    return this.httpClient.get('http://localhost:8081/alunos');
  }

}
