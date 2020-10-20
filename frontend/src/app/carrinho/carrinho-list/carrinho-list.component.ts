import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-carrinho-list',
  templateUrl: './carrinho-list.component.html',
  styleUrls: ['./carrinho-list.component.scss']
})
export class CarrinhoListComponent implements OnInit {

  public carrinhoApi : any = [];
  public totalCarrinho : number = 0;

  constructor(private storageService : StorageService) { }

  ngOnInit(): void {
    this.carrinhoApi = this.storageService.getCarrinho();
    console.log(this.carrinhoApi);
    for (let i = 0; i < this.carrinhoApi.length; i++) {
        this.totalCarrinho = (this.carrinhoApi[i].produto.preco * this.carrinhoApi[i].quantidade) + this.totalCarrinho;
        console.log(this.totalCarrinho);
    }


  }

  deletar(produto){
    let index = this.carrinhoApi.findIndex( x => { return x.produto.id == produto.id });
    this.carrinhoApi.splice(index,1);
    this.storageService.setCarrinho(this.carrinhoApi);
  }

  atualizarTotal(){
    this.totalCarrinho = 0;
    for (let i = 0; i < this.carrinhoApi.length; i++) {
      this.totalCarrinho += (this.carrinhoApi[i].produto.preco * this.carrinhoApi[i].quantidade);
      console.log(this.totalCarrinho);
    }
  }

  atualizaCarrinho(){
    this.storageService.setCarrinho(this.carrinhoApi);
  }

}
