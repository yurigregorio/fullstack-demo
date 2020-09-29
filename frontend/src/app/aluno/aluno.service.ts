import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  public alunoIdService;

  // Http Cliente = um serviço. Pertence ao módulo HttpClienteModule
  constructor(private httpClient: HttpClient) { }

  mostrarMensagem(){
    alert('Minha mensagem');
  }

  getAllAlunosApi(){
    return this.httpClient.get('http://localhost:8081/alunos');
  }

  getOneAluno(idAluno : number){
    return this.httpClient.get('http://localhost:8081/alunos/'+ idAluno);
  }


}
