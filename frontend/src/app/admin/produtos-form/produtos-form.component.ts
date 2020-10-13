import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/shared/model/categoria';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  isEdicao : boolean = false;
  idProduto : number = 0;
  textoBotao : String = 'Salvar';
  meuForm : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private produtoService: ProdutosService,
    private activetedRoute : ActivatedRoute,
    private router : Router,
    private toastr: ToastrService
  ) {
    this.meuForm = this.formBuilder.group( {
      //valor inicial e os validadores
      id : [ '', [  ] ],
      nome : [ '', [ Validators.required ] ],
      descricao: ['', [ Validators.required ] ],
      preco : [ '', [ Validators.required ] ],
      categoria: [ '', [ Validators.required ] ]
    } );
  }

  ngOnInit(): void {
    this.activetedRoute
    .params
    .subscribe(
      (parametros) => {
        if (parametros.id){
          this.isEdicao = true;
          this.idProduto = parametros.id;
          this.getOneProduto(parametros.id);
          this.textoBotao = 'Editar';
        }

      }
    );
  }

  onSubmit(){
    //alert('submit');
    console.log( this.meuForm);
    if (this.isEdicao){
      this.updateProduto(this.idProduto, this.meuForm.value );
    }
    else{
      this.createProduto( this.meuForm.value );
    }

  }

  public isErrorField(fieldName){
    return (this.meuForm.get(fieldName).valid==false && this.meuForm.get(fieldName).touched==true);
  }

  public receberNotificacao(event){
    console.log (event);
  }

  private createProduto( aluno ){
    this.produtoService.createProduto(aluno)
      .subscribe(
        (dados) => {
          console.log( dados );
          this.router.navigate(['/alunos']);
          //alert ( JSON.stringify( dados ) );
          this.toastr.success('Aluno criado com sucesso')
        }
      );
  }

  private updateProduto(id, aluno){
    this.produtoService.updateProduto(id,aluno)
      .subscribe(
        (dados)=>{
          console.log( dados );
          this.router.navigate(['/alunos']);
        //  alert ( JSON.stringify( dados ) );
          this.toastr.success('Aluno alterado com sucesso')
        }
      );
  }

  private getOneProduto(id){
    this.produtoService.getOneProduto(id)
      .subscribe(
        (dados)=>{
          console.log (dados);
          this.meuForm.patchValue(dados);
        }
      );
  }

}
