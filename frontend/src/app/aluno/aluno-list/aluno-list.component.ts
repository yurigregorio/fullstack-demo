import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  public alunos : any;

//Os serviços usam injeção de dependência
  constructor(private alunoService : AlunoService) { }

  ngOnInit(): void {
    this.meuEvento();
    //quando a aplicação inicia, ela passa por aqui
  }

  meuEvento(){
    //this.alunoService.mostrarMensagem();
    this.alunoService.getAllAlunos()
    .subscribe( (resultado) =>
      {
      console.log(resultado);
      this.alunos = resultado;
      }
    );
  } 

}

/**
 * 
 * function minhafuncao(){}
 * 
 * minhafuncao( function(){}, function(){} ) {}
 * minhafuncao( () => {}, () => {} ) {}
 * Arrow Functions => funções flecha
 * 
 */