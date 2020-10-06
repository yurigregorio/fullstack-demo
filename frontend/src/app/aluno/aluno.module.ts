import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoRoutingModule } from './aluno-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AlunoListComponent, AlunoFormComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    SharedModule,

  ],
  exports : [AlunoListComponent]
})
export class AlunoModule { }
