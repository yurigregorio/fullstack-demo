import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoComponent } from './endereco/endereco-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EnderecoComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    SharedModule
  ]
})
export class EnderecoModule { }
