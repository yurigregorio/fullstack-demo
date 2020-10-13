import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  urlApi = `${environment.urlApi}/produtos`;

  constructor(private httpClient: HttpClient) { }

  getAllProdutosApi(){
    return this.httpClient.get(this.urlApi);
  }

  public deletarProduto(id :any){
    return this.httpClient.delete(`${this.urlApi }/${id}`)
  }

  updateProduto(id, produto){
    return this.httpClient.patch( `${this.urlApi }/${id}` , produto );
  }

  createProduto(produtoNovo : any){
    return this.httpClient.post(this.urlApi , produtoNovo);
  }

  getOneProduto(idAluno : number){
    return this.httpClient.get(`${this.urlApi}/${idAluno}`);
  }

}
