import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  public categoriaApi : any = [];


  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  public getAllCategorias(){
    this.categoriaService.getAllCategorias()
    .subscribe(
      (resultado) =>{
        console.log(resultado);
        this.categoriaApi = resultado
      }
    );
  }

  deletarCategoria(id){
    this.categoriaService.deletarCategoria(id)
    .subscribe(
      (dados) => {
          alert("Categoria deletada com sucesso!");
          this.getAllCategorias();
      }
    )
  }


}
