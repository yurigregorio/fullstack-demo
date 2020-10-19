import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-carrinho-list',
  templateUrl: './carrinho-list.component.html',
  styleUrls: ['./carrinho-list.component.scss']
})
export class CarrinhoListComponent implements OnInit {

  public carrinhoApi : any = [];
  public totalCarrinho : number;

  constructor(private storageService : StorageService) { }

  ngOnInit(): void {
    this.carrinhoApi = this.storageService.getCarrinho();
    console.log(this.carrinhoApi);
    
  }

  deletar(produto){
    let index = this.carrinhoApi.findIndex( x => { return x.produto.id == produto.id });
    this.carrinhoApi.splice(index,1);
    this.storageService.setCarrinho(this.carrinhoApi);
  }

}
