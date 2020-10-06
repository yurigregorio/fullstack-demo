import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

const routes: Routes = [
  { path: '' , component : AlunoListComponent },
  { path : 'form', component : AlunoFormComponent },
  { path : 'form/:id' , component : AlunoFormComponent },
  { path : ':id' , component : AlunoListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
