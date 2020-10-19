
import { Usuario } from 'src/app/shared/model/usuario';
import { ItemVenda } from './itemVenda';


export class Vendas{
  id:number;
  usuario: Usuario;
  status : string;
  pagamento : string;
  totalItens: number;
  valor : number;
  parcela : number;
  valorParcela : number;
  item: ItemVenda[] = [];
  dataVenda : string;
}
