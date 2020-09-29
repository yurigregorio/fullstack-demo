import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path  : ''       , component : MeuPrimeiroComponent },
  { path  : 'home'   , component : MeuPrimeiroComponent },
  { path  : 'alunos' , component : AlunoListComponent   } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
