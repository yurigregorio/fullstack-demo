import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  urlApi = `${environment.urlApi}/produtos`;

  constructor(private httpClient: HttpClient) { }

  getAllProdutosApi(){
    return this.httpClient.get(this.urlApi);
  }

  getOneProduto(idAluno : number){
    return this.httpClient.get(`${this.urlApi}/${idAluno}`);
  }
}
