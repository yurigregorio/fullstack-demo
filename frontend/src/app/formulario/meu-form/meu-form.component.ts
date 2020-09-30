import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {
  public novoAluno : any;
  public meuForm : FormGroup;

  constructor(private formularioService :FormularioService, private formBuilder : FormBuilder) {
    this.meuForm = this.formBuilder.group({
      //valor inicial e os validadores..
      id : ['', [] ],
      nome : ['', [ Validators.required, Validators.maxLength(5)] ],
      ra : ['', [ Validators.required ] ],
      curso : ['', [ Validators.required] ],

    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formularioService.postAluno(this.meuForm.value).subscribe(
      (resultado) => {
        console.log("cadastrado");
      }, 
      (error) => {
        console.log(error.status);

      }
    )
  }

}
