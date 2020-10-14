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
 

  constructor(private produtoService : ProdutosService) { }

  ngOnInit(): void {
    this.getAllProdutos();
  }

  public getAllProdutos(){
    this.produtoService.getAllProdutosApi()
    .subscribe(
      ( resultado ) => {
        console.log ( resultado );
        this.produtosApi = resultado;
      }
    );
    }

  deletarProduto(id){
    this.produtoService.deletarProduto(id)
      .subscribe(
        (dados) =>{
            alert("Produto deletado com sucesso");
            this.getAllProdutos();
        }
      );
  }


  }






