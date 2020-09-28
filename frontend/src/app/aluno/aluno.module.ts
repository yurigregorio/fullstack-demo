import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AlunoListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [AlunoListComponent]
})
export class AlunoModule { }
