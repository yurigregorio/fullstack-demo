import { Categoria } from './categoria';

import { imagenModel } from './imagem';

export class Produto{
  id:number;
  nome:string;
  preco:number;
  descricao:string;
  categorias: Categoria[] = [];
  imagens: imagenModel[] = [];

}
