import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {
  public novoAluno : number = 0;
  public meuForm : FormGroup;
  @Output() public contador: number = 0;


  constructor(private formularioService : FormularioService, 
              private formBuilder       : FormBuilder             ) {

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
    this.postAluno(this.meuForm.value);

  }

  public isErrorField(fieldName){
    return (this.meuForm.get(fieldName).valid==false && this.meuForm.get(fieldName).touched==true);
  }

  public receberNotificacao(event){
    console.log(event);
    this.contador++;
  }


  private postAluno (aluno : any){
    this.formularioService.postAluno(aluno)
    .subscribe(
      (dados) =>{
        console.log(dados);
        alert ( JSON.stringify(dados));
      }
    );
  }

}
