
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaPagination } from 'src/app/shared/model/categoria-pagination';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  //public categorias : Categoria[] = [];
  public paginacao : CategoriaPagination = new CategoriaPagination();

  //public pagina: number = 0;
  //public linhas : number = 5;

  public totalElementos = 0;
  public totalPaginas = 0;

  public categoriaApi : any;

  public totalPages : number = 0;
  public busca : string = '';

  constructor(private categoriaService : CategoriaService, private toastr : ToastrService, private router : Router) {

   }


  ngOnInit(): void {
    this.pagination();
//    this.getAllCategorias();
  }

//  public getAllCategorias(){
//    this.categoriaService.getAllCategorias()
//    .subscribe(
//      (resultado) =>{
//        console.log(resultado);
//        this.categoriaApi = resultado
//      }
//    );
//  }

  deletarCategoria(id){
    this.categoriaService.deletarCategoria(id)
    .subscribe(
      (dados) => {
        this.toastr.success("Categoria deletada com sucesso!")
        this.pagination();
      }
    );
  }

   public nextPage(){
    this.paginacao.number++;
    this.pagination();
  }

  public previousPage(){
    this.paginacao.number--;
    if (this.paginacao.number < 0) this.paginacao.number = 0;
    this.pagination();
  }
  public setPage(page: number){
    this.paginacao.number = page;
    this.pagination();
  }

  public onLinhasChange(){
    this.pagination();
  }

  private pagination(){
    this.categoriaService.getPagination(this.paginacao.number, this.paginacao.size, this.busca)
    .subscribe(
        (response : any) => {
          this.paginacao = response;
         // this.totalElementos = response.totalElements;
         // this.totalPaginas = response.totalPages;
        }
      );
  }

  public onSearch(){
    this.pagination();
  }
}
