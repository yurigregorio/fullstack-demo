import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoComponent implements OnInit {


  public meuForm : FormGroup;

  constructor(
    private enderecoService : EnderecoService,
    private formBuilder     : FormBuilder,
    private activatedRoute  : Router,
    private toastr          : ToastrModule

  ) {
    this.meuForm = this.formBuilder.group({
      cep : ['', [ Validators.required] ],
    });

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.enderecoService.getCEP
  }

  buscarCep(){
    this.enderecoService.getCEP(this.meuForm.value)
    .subscribe(
      (success) => {
        console.log (success);
  }
    )
}

  public isErrorField(fieldName){
    return (this.meuForm.get(fieldName).valid==false && this.meuForm.get(fieldName).touched==true);
  }

  public receberNotificacao(event){
    console.log (event);
  }

}
