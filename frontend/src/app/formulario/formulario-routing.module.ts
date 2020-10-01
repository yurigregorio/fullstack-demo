import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CicloComponent } from './ciclo/ciclo.component';
import { MeuFormComponent } from './meu-form/meu-form.component';


const routes: Routes = [
  {path: 'formulario/meu-form',  component : MeuFormComponent },
  {path: 'formulario/ciclo',     component : CicloComponent   }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
