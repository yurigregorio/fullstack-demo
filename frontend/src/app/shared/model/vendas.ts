import { Usuario } from './usuario';
import { ItemVenda } from './itemVenda';

export class Vendas{
    id:number;
    usuario: Usuario;
    statusVenda : string;
    pagamento : string;
    totalItens: number;
    valor : number;
    parcela : number;
    valorParcela : number;
    item: ItemVenda[] = [];
    dataVenda : string;
}
