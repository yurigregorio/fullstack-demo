import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { SharedModule } from '../shared/shared.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';


@NgModule({
  declarations: [ProdutosComponent, ProdutosFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
