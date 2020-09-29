import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  public alunosApi  : any;
  public alunoId    : number = 0;
  public aluno      : any;
  
  

//Os serviços usam injeção de dependência
  constructor(private alunoService : AlunoService, private activatedRoute : ActivatedRoute) { 
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe( 
      (parametros) => {
        console.log(parametros.id);
          if (parametros.id){
            this.alunoId = parametros.id;
            
            this.alunoService.getOneAluno(this.alunoId)
            .subscribe(
              (dados : any) => {
                this.aluno = dados;
                if (dados.nome){
                alert('nome' + dados.nome + ' ra ' + dados.ra)
              } else {
                alert('Aluno não encontrado')
              }

              }, (error) => {
                alert('erro ao consultar aluno')
              }
            );
        }
      } 
    );
  }

  ngOnInit(): void {
    //this.meuEvento();
    //this.getOneAluno();
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