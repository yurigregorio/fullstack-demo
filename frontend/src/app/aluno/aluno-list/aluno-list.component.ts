import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  public alunosApi : any;
  

//Os serviços usam injeção de dependência
  constructor(private alunoService : AlunoService) { }

  ngOnInit(): void {
    //this.meuEvento();
    //quando a aplicação inicia, ela passa por aqui
  }

  meuEvento(){
    //this.alunoService.mostrarMensagem();
    this.alunoService.getAllAlunosApi()
    .subscribe( (resultado) =>
      {
      console.log(resultado);
      this.alunosApi = resultado;
      },
      //usando há erro
      (error) => {
        console.log (error);
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