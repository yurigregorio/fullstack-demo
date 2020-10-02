import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
urlApi = `${environment.urlApi}/categorias`;
  constructor(private httpClient: HttpClient) { }



getAllCategorias(){
  return this.httpClient.get(this.urlApi);
};

getOneCategorias(idCategoria : number){
  return this.httpClient.get(`${this.urlApi}/${idCategoria}`);
}

createCategoria(newCategoria : any){
  return this.httpClient.post(this.urlApi , newCategoria);
}

updateCategoria(id, categoria){
  return this.httpClient.patch( `${this.urlApi }/${id}` , categoria );
}

public deletarCategoria(id :any){
  return this.httpClient.delete(`${this.urlApi }/${id}`)
}

}
