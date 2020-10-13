import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { FormEnderecoComponent } from './endereco/endereco-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FormEnderecoComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    SharedModule
  ]
})
export class EnderecoModule { }
