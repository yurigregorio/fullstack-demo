import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoriaPagination } from '../shared/model/categoria-pagination';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
url = `${environment.urlApi}/categorias`;
  constructor(private httpClient: HttpClient) { }



getAllCategorias(){
  return this.httpClient.get(this.url);
};

getOneCategorias(idCategoria : number){
  return this.httpClient.get(`${this.url}/${idCategoria}`);
}

createCategoria(newCategoria : any){
  return this.httpClient.post(this.url , newCategoria);
}

updateCategoria(id, categoria){
  return this.httpClient.patch( `${this.url }/${id}` , categoria );
}

public deletarCategoria(id :any){
  return this.httpClient.delete(`${this.url }/${id}`)
}
 
  public pagination(pagina: number, linhas: number){
    return this.httpClient.get(`${this.url}/pagination?pagina=${pagina}&linhas=${linhas}`);
  }

  public getPagination (pagina : number, linhas : number, busca : string){
    return this.httpClient.get<CategoriaPagination>(`${this.url}/pagination?pagina=${pagina}&linhas=${linhas}&busca=${busca}`)
  }
}
