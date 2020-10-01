import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CicloComponent } from './ciclo/ciclo.component';



@NgModule({
  declarations: [MeuFormComponent, CicloComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    //FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormularioModule { }
