import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostrarErrosComponent } from './mostrar-erros/mostrar-erros.component';


@NgModule({
  declarations: [MeuFormComponent, MostrarErrosComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    //FormsModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }
