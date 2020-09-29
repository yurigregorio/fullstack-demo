import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuFormComponent } from './meu-form/meu-form.component';

const routes: Routes = [
  {path: 'forms/meu-form',  component : MeuFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
