import { Categoria } from './categoria';

export class CategoriaPagination{
  content : Categoria[] = [];
  totalPages : number = 0;
  totalElements : number = 0;
  size: number = 1;
  number: number = 0;
  numberOfElements: number = 0;
}
