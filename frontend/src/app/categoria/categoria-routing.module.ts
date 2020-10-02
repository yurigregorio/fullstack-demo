import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path   : 'categorias', component : CategoriaComponent},
  {path   : 'categorias/form', component : CategoriaFormComponent},
  {path   : 'categorias/form/:id', component : CategoriaFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
