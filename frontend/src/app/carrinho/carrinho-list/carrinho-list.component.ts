import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Vendas } from 'src/app/shared/model/vendas';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho-list',
  templateUrl: './carrinho-list.component.html',
  styleUrls: ['./carrinho-list.component.scss']
})
export class CarrinhoListComponent implements OnInit {

  public carrinhoApi : any = [];
  public totalCarrinho : number = 0;

  constructor(private storageService : StorageService, private carrinhoService : CarrinhoService) { }

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

  finalizarVenda(){
      let venda : Vendas = {
      id          :null,
      usuario     : this.storageService.getLocalUser(),
      statusVenda : 'Aberta',
      pagamento   : '2',
      totalItens  : this.storageService.getCarrinho().length,
      valor       : this.storageService.getValorTotal(),
      parcela     : 1,
      valorParcela: this.storageService.getValorTotal(),
      item        : this.storageService.getCarrinho(),
      dataVenda : moment(new Date() ).format("DD-MM-yyyy HH:mm:ss")
    };
    //import   moment from 'moment';
    this.carrinhoService.saveVenda(venda)
    .subscribe( data => {});
  }



}
