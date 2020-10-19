import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoListComponent } from './carrinho-list/carrinho-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CarrinhoListComponent],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    SharedModule
  ]
})
export class CarrinhoModule { }
