import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  public alunoIdService;

  urlApi = `${environment.urlApi}/alunos`;

  // Http Cliente = um serviço. Pertence ao módulo HttpClienteModule
  constructor(private httpClient: HttpClient) { }

  mostrarMensagem(){
    alert('Minha mensagem');
  }

  getAllAlunosApi(){
    return this.httpClient.get(this.urlApi);
  }

  getOneAluno(idAluno : number){
    return this.httpClient.get(`${this.urlApi}/${idAluno}`);
  }

  createAluno(alunoNovo : any){
    return this.httpClient.post(this.urlApi , alunoNovo);
  }

  updateAluno(id, aluno){
    return this.httpClient.patch( `${this.urlApi }/${id}` , aluno );
  }

  public deletarAluno(id :any){
    return this.httpClient.delete(`${this.urlApi }/${id}`)
  }
}
