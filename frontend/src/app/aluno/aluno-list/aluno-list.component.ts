import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  //public alunos : any;
  public alunosApi : any = [];
  public alunoId :number = 0;
  public aluno : any;
  //Os Servços usam injeção de dependência
  //private alunoService : AlunoService = new AlunoService();
  constructor(private alunoService : AlunoService) {
  }

  public getallAlunos(){
    this.alunoService.getAllAlunosApi()
    .subscribe(
      ( resultado ) => {
        console.log ( resultado );
        this.alunosApi = resultado;
      }
    );
  }


  ngOnInit(): void {
    //quando a aplicação inicia, ela passa por aqui
    this.getallAlunos();
  }

  deletarAluno(id){
    this.alunoService.deletarAluno(id)
      .subscribe(
        (dados) =>{
            alert("aluno deletado com sucesso");
            this.getallAlunos();
        }
      );
  }

}

/**
 *
 * function minhaFuncao( param1, param2 ){}
 *
 * minhaFuncao(  function (resultado) : {}, function (){} ){}
 *
 * minhaFuncao( (resultado) :void => {},  () => {} ){}
 * Arrow Functions -> funções fecha
 */
