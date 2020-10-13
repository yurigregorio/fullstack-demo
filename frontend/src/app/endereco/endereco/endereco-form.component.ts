
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoService } from './../endereco.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';


@Component({
  selector: 'app-form-endereco',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class FormEnderecoComponent implements OnInit {
  meuForm : FormGroup;
  login: any;

  constructor(
    private formBuilder: FormBuilder ,
    private enderecoService : EnderecoService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private storageService: StorageService
  ) {
    this.meuForm = this.formBuilder.group({
      // valor inicial e os validadores
      cep:    ["", [Validators.required]],
      logradouro: [""],
      numero: [""],
      bairro: [""],
      estado: [""],
      cidade: [""]
    });
  }

ngOnInit(): void {
}

onSubmit() {}

public isErrorField(fieldName){
  return (this.meuForm.get( fieldName ).valid == false && this.meuForm.get( fieldName ).touched == true);
}

public receberNotificacao(event) {
  console.log(event);
}

public buscarCep(){
  this.enderecoService.enderecoApi(this.meuForm.value.cep)
  .subscribe(
    (response:any) => {
      console.log(response);
      this.meuForm.patchValue({estado:response.uf,bairro:response.bairro,cidade:response.localidade, logradouro:response.logradouro});
    }
  );
}

public salvarCep() {
  this.login = this.storageService.getLocalUser();
  console.log(this.login.id);

  this.enderecoService.salvarEndereco(this.login.id, this.meuForm.value)
    .subscribe(
      (sucess: any) => {
        console.log(sucess);
      }
    );
}


}
