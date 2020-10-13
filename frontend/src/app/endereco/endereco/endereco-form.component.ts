import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/model/usuario';
import { StorageService } from 'src/app/shared/services/storage.service';
import { EnderecoService } from '../endereco.service';
import { EnderecoUsuario } from './model/endereco-usuario';


@Component({
  selector: 'app-form-endereco',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class FormEnderecoComponent implements OnInit {
  usuarioForm:FormGroup;

  constructor(
    private enderecoService:EnderecoService,
    private meuForm:FormBuilder,
    private storageService : StorageService,
    private activetedRoute : ActivatedRoute,
    private router: Router,
  ){

  }

  ngOnInit(): void {

    this.usuarioForm = this.meuForm.group(
      {
        cep:['',[Validators.required,Validators.maxLength(8)]],
        logradouro:['',[Validators.required]],
        numero:['',[Validators.required]],
        complemento:['',[]],
        bairro:['',[Validators.required]],
        cidade:['',[Validators.required]],
        estado:['',[Validators.required]]
        }
    );
  }

  public consultaCEP(){
    return this.enderecoService.enderecoApi(this.usuarioForm.value.cep).subscribe(
      (response:EnderecoUsuario)=>{
        let endereco = {
            logradouro:response.logradouro,
            estado:response.uf,
            bairro:response.bairro,
            cidade:response.localidade
        };
        this.usuarioForm.patchValue(endereco);
      },
      (error)=>{
        console.log(JSON.stringify(error));
      }
    )
  }
  public onSubmit(){
    let usuarioStorage : Usuario = this.storageService.getLocalUser();
    console.log (this.usuarioForm.value);

    let body = Object.assign(this.usuarioForm.value, { usuario : { id: usuarioStorage.id } } );

    this.enderecoService.salvarEndereco( body )
      .subscribe(
        (success) => {

        }
      );

  }


}
