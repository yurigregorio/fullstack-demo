import { Injectable } from '@angular/core';
import { ItemVenda } from '../model/itemVenda';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getLocalUser() : Usuario {
    let user = localStorage.getItem('localUser');
    if (user){
      return JSON.parse( user );
    }
    else return null;
  }

  /**
   *JSON.parse converte de string para json
   JSON.stringfy converte de json para String
   *
   */
  public setLocalUser(obj){
    if (obj == null){
      localStorage.removeItem('localUser');
    }
    else{
      localStorage.setItem('localUser', JSON.stringify (obj));
    }
  }
  public getCarrinho(): ItemVenda[] {
    //let str = localStorage.getItem(environment.storageKeysConfig.carrinho);
    let str = localStorage.getItem('carrinho');

    if (str != null) {
      return JSON.parse(str);
    }
    else {
      return null;
    }
  }

  public setCarrinho(obj: ItemVenda[]) {
    if (obj != null) {
      //localStorage.setItem(environment.storageKeysConfig.carrinho, JSON.stringify(obj)  );
      localStorage.setItem('carrinho', JSON.stringify(obj));
    }
    else {
      //localStorage.removeItem(environment.storageKeysConfig.carrinho);
      localStorage.removeItem('carrinho');
    }
  }

  getValorTotal(){
    let itemVenda : ItemVenda[] = this.getCarrinho();
    let total : number = 0;

    itemVenda.forEach( element => {
      total += element.produto.preco * element.quantidade ;
    });

    return total;
  }

}
