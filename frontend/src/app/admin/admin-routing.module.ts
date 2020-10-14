import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path : '' , component : ProdutosComponent },
  { path : 'form' , component : ProdutosFormComponent },
  { path : 'form/:id' , component : ProdutosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
