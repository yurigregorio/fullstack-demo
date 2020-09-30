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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
