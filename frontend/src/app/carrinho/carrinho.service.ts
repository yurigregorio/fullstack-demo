import { Injectable } from '@angular/core';
import { ItemVenda } from '../shared/model/itemVenda';
import { Produto } from '../shared/model/produto';
import { Usuario } from '../shared/model/usuario';
import { Vendas } from '../shared/model/vendas';
import { StorageService } from '../shared/services/storage.service';





@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(
    private localStorage: StorageService
    ) { }


  itensCarrinho: ItemVenda[] = [];

  venda: Vendas = new Vendas();

  user: Usuario = new Usuario();

  valorTotal: number;
  frete: number = 15;

  criarOuLimparCarrinho(): ItemVenda[] {
    //let carrinho: ItemVendaModel[] = null;
    //this.localStorage
    this.itensCarrinho = []
    //return carrinho;

    return this.itensCarrinho;
  }

  getFrete(){
    return this.frete;
  }

  getCarrinho(): ItemVenda[] {
    let cart: ItemVenda[] = this.localStorage.getCarrinho();
    if (cart == null) {
      cart = this.criarOuLimparCarrinho();
    }
    return cart;
  }

  public exibirItens(): ItemVenda[] {
    return this.itensCarrinho
  }


  public addProduto(produ: Produto = new Produto(), quant) {
    let item: ItemVenda = new ItemVenda()
    item.produto = produ
    item.quantidade = quant
    this.itensCarrinho.push(item)
    console.log(item)
  }


  public alterarQuantidade(selectedOption, id): void {

    let num = parseInt(selectedOption)

    let find = this.itensCarrinho.find((item: ItemVenda) => item.produto.id === id)

    if (find) {
      find.quantidade = num
    }
    console.log(this.itensCarrinho)
    console.log(selectedOption)
    console.log(id)
    this.localStorage.setCarrinho(this.itensCarrinho);

  }


  removeItem(idProduto) {
    this.itensCarrinho.splice(this.itensCarrinho.findIndex(p => p.produto.id == idProduto), 1);
    this.localStorage.setCarrinho(this.itensCarrinho);
  }

  calculoCarrinho() {
    let totalValor = 0
    totalValor = this.itensCarrinho.reduce((valorProdutos, item) => valorProdutos + (item.produto.preco * item.quantidade), 0)
    return totalValor
  }

  valorTotalFrete() {
    let totalFrete = 0;
    return totalFrete = this.calculoCarrinho() + this.frete;
  }

  totalItensCarrinho() {
    let total = 0
    this.itensCarrinho.map(function (item) {
      total = total + (item.quantidade);
    });
    return total;
  }

  verifyItemExists(produ: Produto = new Produto(), quant) {

    let find = this.itensCarrinho.find( (item: ItemVenda) => item.produto.id === produ.id)

    if (find) {
      find.quantidade += quant;
    } else {
      this.addProduto(produ, quant)
    }
    this.localStorage.setCarrinho(this.itensCarrinho);
  }

  totalizarVenda() {
    this.user.email = this.localStorage.getLocalUser().email
    // this.venda.usuario = this.user;
    this.venda.pagamento = "Aguardando";
    this.venda.status = "Aberta";
    this.venda.totalItens = this.totalItensCarrinho();
    this.venda.valor = this.valorTotalFrete()
    this.venda.parcela = 10;
    this.venda.valorParcela = this.valorTotalFrete() / this.venda.parcela;
    this.venda.usuario = this.user
  }


  fecharVenda() {
    this.totalizarVenda();
    this.venda.item = this.itensCarrinho
    console.log("Venda: " + this.itensCarrinho)
    console.log("User: " + this.user.id)
  }

}
