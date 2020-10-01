import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarErrosComponent } from './components/mostrar-erros/mostrar-erros.component';


@NgModule({
  declarations: [MostrarErrosComponent],
  imports: [
    CommonModule
  ],
  exports : [MostrarErrosComponent]
})
export class SharedModule { }
