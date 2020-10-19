import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path : '' , component : ProdutosComponent },
  { path : 'form' , component : ProdutoFormComponent },
  { path : 'form/:id' , component : ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
