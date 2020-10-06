import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarErrosComponent } from './components/mostrar-erros/mostrar-erros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [MostrarErrosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports : [
    MostrarErrosComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
],
})


export class SharedModule { }
