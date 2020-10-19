import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public produtosApi : any = [];
  //pagina é o indice da API
  public pagina: number = 0;
  //paginador é o índice do paginador
  public paginador: number = this.pagina+1;
  public linhas: number = 2;
  public nome: string = "";
  public totalElementos: number = 0;
  public totalPaginas: number = 0;


  constructor(private produtosService : ProdutosService) { }
  ngOnInit(): void {
    this.pagination();
  }
  private pagination(): void {
    this.produtosService.pagination(this.pagina, this.linhas).subscribe(
      (response: any) => {
        console.log(response);
        this.produtosApi = response;
        this.totalElementos = response.totalElements;
        this.totalPaginas = response.totalPages;
      }
    );
  }


  public getAllProdutos(){
    this.produtosService.getAllProdutosApi()
    .subscribe(
      ( resultado ) => {
        console.log ( resultado );
        this.produtosApi = resultado;
      }
    );
    }

  deletarProduto(id){
    this.produtosService.deletarProduto(id)
      .subscribe(
        (dados) =>{
            alert("Produto deletado com sucesso");
            this.getAllProdutos();
        }
      );
  }


  public onChangeSelected(): void {
    this.pagination();
  }

  nextPage(): void {
    this.pagina++;
    this.pagination();
  }

  previousPage(): void {
    this.pagina--;
    if (this.pagina < 0) {
      this.pagina = 0;
    }
    this.pagination();
  }

  public setPage(page: number): void {
    this.pagina = page;
    this.pagination();
  }

  pageChange(event){
    console.log(event)
    this.pagina = event -1 ;
    this.paginador = event;
    this.pagination();
  }

  }






