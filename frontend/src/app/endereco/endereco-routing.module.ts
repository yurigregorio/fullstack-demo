import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEnderecoComponent } from './endereco/endereco-form.component';

const routes: Routes = [
  {path   : '' , component : FormEnderecoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }

