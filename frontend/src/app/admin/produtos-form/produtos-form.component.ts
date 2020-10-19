import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/shared/model/categoria';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  public meuForm: FormGroup;
  isEdicao: boolean = false;
  idProduto: number = 0;
  textoBotao: String = 'Salvar';
  public produtosApiBackup: any = [];
  public categoriasDaBox: any = [];
  public produtosApi: any = [];
  public imagens : any = [];


  /**documentação */
  dropdownSettings : IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'url',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(
    private formBuilder: FormBuilder,
    private activetedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private produtoService : ProdutosService

  ) {
    this.meuForm = this.formBuilder.group({
      id: ['', []],
      nome: ['', []],
      descricao: ['', []],
      preco: ['', []],
      categoria : this.formBuilder.group (
        {
          id : ['', [ ] ] ,
          nome : [ '', [ ] ]
        } ),
      imagens: ['', [ ] ]
    });
  }

  ngOnInit(): void {
    this.produtoService.getAllCategorias()
      .subscribe(
        (dados) => {
          console.log(dados);
          this.categoriasDaBox = dados;
        }
      );
    this.activetedRoute
      .params
      .subscribe(
        (parametros) => {
          if (parametros.id) {
            this.isEdicao = true;
            this.idProduto = parametros.id;
            this.getOneProduto(parametros.id);
            this.textoBotao = 'Editar';
          }
        }
      );

      this.getAllImagens();
  }

  onSubmit() {
    console.log(this.meuForm.value);
    //this.meuForm.value.imagens = [{url: this.meuForm.value.url}];
    if (this.isEdicao) {
      this.updateProduto(this.idProduto, this.meuForm.value);
    }
    else {
      this.createProduto(this.meuForm.value);
    }
  }

  public isErrorField(fieldName) {
    return (this.meuForm.get(fieldName).valid == false && this.meuForm.get(fieldName).touched == true);
  }

  public receberNotificacao(event) {
    console.log(event);
  }

  private createProduto(produto) {
    //produto.categoria = this.categoriasDaBox.find( (categoriaTeste) => categoriaTeste.id == produto.categoria );

    this.produtoService.createProduto(produto)
      .subscribe(
        (dados) => {
          console.log(produto)
          console.log(dados);
          this.router.navigate(['/produtos']);
          this.toastr.success('Produto criado com sucesso')
        }
      );
  }

  private updateProduto(id, categoria) {
    this.produtoService.updateProduto(id, categoria)
      .subscribe(
        (dados) => {
          console.log(dados);
          this.router.navigate(['/produtos']);
          this.toastr.success('Produto alterado com sucesso')
        }
      );
  }

  private getOneProduto(id) {
    this.produtoService.getOneProduto(id)
      .subscribe(
        (dados) => {
          console.log(dados);
          this.meuForm.patchValue(dados);
        }
      );
  }

  public procurarProduto(id: number) {
    let produtos = [];
    this.produtosApiBackup.forEach(element => {
      if (element.categoria.id == id) {
        console.log(element.categoria.id)
        produtos.push(element);
      }
    });
    console.log("Depois " + produtos)
    this.produtosApi = produtos;
    console.log(id)
  }

  private getAllImagens(){
    this.produtoService.getAllImagens()
      .subscribe(
        (resp) => {
          console.log (resp);
          this.imagens = resp;
        }
      );
  }

  /**documentação */
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
