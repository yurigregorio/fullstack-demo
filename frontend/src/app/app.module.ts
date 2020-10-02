import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunoModule } from './aluno/aluno.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FormularioRoutingModule } from './formulario/formulario-routing.module';
import { FormularioModule } from './formulario/formulario.module';
import { AlunoRoutingModule } from './aluno/aluno-routing.module';
import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaRoutingModule } from './categoria/categoria-routing.module';
import { CategoriaModule } from './categoria/categoria.module';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlunoModule,
    FormularioRoutingModule,
    ReactiveFormsModule,
    FormularioModule,
    AlunoRoutingModule,
    BrowserAnimationsModule,
    CategoriaRoutingModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
