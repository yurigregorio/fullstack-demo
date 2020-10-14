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
  meuForm : FormGroup;
  public categoriasBox : any = [];

  constructor(
    private formBuilder : FormBuilder,
    private produtoService: ProdutosService,
    private activetedRoute : ActivatedRoute,
    private router : Router,
    private toastr: ToastrService,

  ) {
    this.meuForm = this.formBuilder.group( {
      //valor inicial e os validadores
      //id : [ '', [  ] ],
      nome : [ '', [ Validators.required ] ],
      descricao: ['', [ Validators.required ] ],
      preco : [ '', [ Validators.required ] ],
      categoria: [ '', [ Validators.required ] ]
    } );
  }

  ngOnInit(): void {
    this.preencherSelectBoxComCategorias();
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
  preencherSelectBoxComCategorias(){
    this.produtoService.pegarCategorias().subscribe( (dados) => {
      this.categoriasBox = dados;
      console.log(this.categoriasBox);
    }, (error) => {
      console.log(error);
    });
  }


 onSubmit(){
  this.meuForm.value.categoria = this.categoriasBox.find(c => c.id == this.meuForm.value.categoria);

  if(this.isEdicao){
    this.updateProduto(this.idProduto, this.meuForm.value );
  }else{
    this.createProduto(this.meuForm.value);
  }
  console.log(this.meuForm.value.categoria);
}

  public isErrorField(fieldName){
    return (this.meuForm.get(fieldName).valid==false && this.meuForm.get(fieldName).touched==true);
  }

  public receberNotificacao(event){
    console.log (event);
  }

  private createProduto( produto ){
    //this.meuForm.value.categoria = this.categoriasDaBox;
    this.produtoService.createProduto(produto)
      .subscribe(
        (dados) => {
          console.log( dados );
          this.router.navigate(['/produtos']);
          this.toastr.success('Produto criado com sucesso')
        }
      );
  }

  private updateProduto(id, produto){
    this.produtoService.updateProduto(id,produto)
      .subscribe(
        (dados)=>{
          console.log( dados );
          this.router.navigate(['/produtos']);
          this.toastr.success('Produto alterado com sucesso')
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
