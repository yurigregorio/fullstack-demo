import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private httpClient : HttpClient) { }
  
  
postAluno(alunoNovo : any){
  return this.httpClient.post('http://localhost:8081/alunos/', alunoNovo)
}

}