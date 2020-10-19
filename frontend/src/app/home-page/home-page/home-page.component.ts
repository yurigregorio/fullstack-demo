import { Component, OnInit } from '@angular/core';
import { CarrinhoListComponent } from 'src/app/carrinho/carrinho-list/carrinho-list.component';
import { ItemVenda } from 'src/app/shared/model/itemVenda';
import { Produto } from 'src/app/shared/model/produto';
import { StorageService } from 'src/app/shared/services/storage.service';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public homeApi : any = [];

  constructor(private homeService : HomePageService, private storageService : StorageService) { }

  ngOnInit(): void {
    this.getAllProdutos();
  }

  public getAllProdutos(){
    this.homeService.getAllProdutosApi()
    .subscribe(
      ( resultado ) => {
        console.log ( resultado );
        this.homeApi = resultado;

      }
    );
}
inserirNoCarrinho(produto) {

  let itemVenda : ItemVenda = { produto : produto, quantidade : 1 , id: null };
  let carrinho : ItemVenda[] = this.storageService.getCarrinho();

  if (carrinho == null){
    carrinho = [];
  }

  let index = carrinho.findIndex( x => { return x.produto.id == produto.id });
  console.log(index);
  if (index >= 0){
    carrinho[index].quantidade++;
  }
  else {
    carrinho.push(itemVenda);
  }

  this.storageService.setCarrinho(carrinho);
}


}
