import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private alunoService : AlunoService, private activatedRoute : ActivatedRoute ) {
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe(
      (parametros) => {

        if (parametros.id){
          this.alunoId = parametros.id;

          this.alunoService.getOneAluno(this.alunoId)
            .subscribe(
              (dados : any)=>{
                this.aluno = dados;
                this.alunosApi.push(this.aluno);
                if (dados.nome){
                  alert( 'nome ' + dados.nome + ' ra ' + dados.ra );
                }
                else{
                  alert( 'aluno não encontrado' );
                }

              },
              (error) => {
                alert ('erro ao consultar o aluno');
              }
             );

        }

      }
    );
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
