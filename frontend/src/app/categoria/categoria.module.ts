import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CategoriaService } from './categoria.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriaComponent, CategoriaFormComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot()

  ]
})
export class CategoriaModule { }
