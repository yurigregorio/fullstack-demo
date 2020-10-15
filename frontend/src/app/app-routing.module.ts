import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from './auth/guards/admin-guard.service';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path  : ''          , component    : HomePageComponent },
  { path  : 'home'      , component    : HomePageComponent },
  { path  : 'categorias', loadChildren : () => import('./categoria/categoria.module').then( (m) => m.CategoriaModule ) },
  { path  : 'alunos'    , loadChildren : () => import('./aluno/aluno.module').then( (m) => m.AlunoModule ) },
  { path  : 'auth'      , loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule)},
  { path  : 'endereco'  , loadChildren : () => import('./endereco/endereco.module').then( m => m.EnderecoModule)},
  { path  : 'produtos'  , loadChildren : () => import('./admin/admin.module').then( m => m.AdminModule), canActivate : [AdminGuardService]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
