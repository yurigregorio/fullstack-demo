import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlApi = `${environment.urlApi}/produtos`;

  constructor(private httpClient: HttpClient) { }

  public getAllProdutosApi(){
    return this.httpClient.get( this.urlApi );
  }

  public getOneProduto(id : number){
    return this.httpClient.get(`${this.urlApi}/${id}`);
  }

  public createProduto(produto : any){
    return this.httpClient.post(this.urlApi , produto);
  }

  public updateProduto(id, produto){
    return this.httpClient.patch(`${this.urlApi }/${id}`, produto);
  }

  public deletarProduto(id : any) {
    return this.httpClient.delete (`${this.urlApi }/${id}`);
  }

  public getAllCategorias(){
    return this.httpClient.get( `${environment.urlApi}/categorias` );
  }

  /**Serviço */
  public getAllImagens(){
    return this.httpClient.get( `${environment.urlApi}/imagens` );
  }

  public pagination(pagina: number, linhas: number){
    return this.httpClient.get(`http://localhost:8081/produtos/paginador?pagina=${pagina}&linhas=${linhas}`);
  }


}
