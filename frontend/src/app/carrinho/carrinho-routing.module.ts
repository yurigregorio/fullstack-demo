import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoListComponent } from './carrinho-list/carrinho-list.component';

const routes: Routes = [
  { path : '' , component : CarrinhoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
