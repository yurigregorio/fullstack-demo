import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { CarrinhoModule } from '../carrinho/carrinho.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    CarrinhoModule
  ]
})
export class HomePageModule { }
