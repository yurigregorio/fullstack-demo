import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
urlApi = `${environment.urlApi}/categorias`;
  constructor(private httpClient: HttpClient) { }



getAllCategorias() : Observable<Categoria[]>{
  return this.httpClient.get<Categoria[]>(this.urlApi);
};

getOneCategorias(idCategoria : number){
  return this.httpClient.get<Categoria[]>(`${this.urlApi}/${idCategoria}`);
}

createCategoria(newCategoria : any){
  return this.httpClient.post<Categoria[]>(this.urlApi , newCategoria);
}

updateCategoria(id, categoria){
  return this.httpClient.patch<Categoria[]>( `${this.urlApi }/${id}` , categoria );
}

public deletarCategoria(id :any){
  return this.httpClient.delete(`${this.urlApi }/${id}`)
}

}
