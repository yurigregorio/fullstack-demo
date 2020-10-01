import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

const routes: Routes = [
  { path: 'alunos' , component : AlunoListComponent },
  { path : 'alunos/form', component : AlunoFormComponent },
  { path : 'alunos/form/:id' , component : AlunoFormComponent },
  { path : 'alunos/:id' , component : AlunoListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }