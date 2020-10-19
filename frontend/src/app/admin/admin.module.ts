import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { SharedModule } from '../shared/shared.module';
import { ProdutoFormComponent } from './produtos-form/produtos-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProdutosComponent, ProdutoFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule
  ]
})
export class AdminModule { }
