import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path   : '', component : CategoriaComponent},
  {path   : 'form', component : CategoriaFormComponent},
  {path   : 'form/:id', component : CategoriaFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
