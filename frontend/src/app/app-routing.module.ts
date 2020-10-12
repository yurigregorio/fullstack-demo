import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path  : ''          , component    : MeuPrimeiroComponent },
  { path  : 'home'      , component    : MeuPrimeiroComponent },
  { path  : 'categorias', loadChildren : () => import('./categoria/categoria.module').then( (m) => m.CategoriaModule ) },
  { path  : 'alunos'    , loadChildren : () => import('./aluno/aluno.module').then( (m) => m.AlunoModule ) },
  { path  : 'produtos'  , loadChildren : () => import('./produtos/produtos.module').then( (m) => m.ProdutosModule ) },
  { path  : 'auth'      , loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule)},
  { path  : 'endereco'  , loadChildren : () => import('./endereco/endereco.module').then( m => m.EnderecoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
