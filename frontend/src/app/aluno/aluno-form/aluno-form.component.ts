import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  meuForm : FormGroup;
  isEdicao : boolean = false;
  idAluno : number = 0;
  textoBotao : String = 'Salvar';

  constructor(
    private formBuilder : FormBuilder,
    private alunoService: AlunoService,
    private activetedRoute : ActivatedRoute,
    private router : Router,
    private toastr: ToastrService

    ) {
      this.meuForm = this.formBuilder.group( {
        //valor inicial e os validadores
        id : [ '', [  ] ],
        nome : [ '', [ Validators.required ] ],
        ra: ['', [ Validators.required ] ],
        curso : [ '', [ Validators.required ] ]
      } );
   }

  ngOnInit(): void {
    this.activetedRoute
      .params
      .subscribe(
        (parametros) => {
          if (parametros.id){
            this.isEdicao = true;
            this.idAluno = parametros.id;
            this.getOneAluno(parametros.id);
            this.textoBotao = 'Editar';
          }

        }
      );
  }

  onSubmit(){
    //alert('submit');
    console.log( this.meuForm);
    if (this.isEdicao){
      this.updateAluno(this.idAluno, this.meuForm.value );
    }
    else{
      this.createAluno( this.meuForm.value );
    }

  }

  public isErrorField(fieldName) {
    return (this.meuForm.get( fieldName ).valid == false && this.meuForm.get( fieldName ).touched == true);
  }

  public receberNotificacao(event){
    console.log (event);
  }

  private createAluno( aluno ){
    this.alunoService.createAluno(aluno)
      .subscribe(
        (dados) => {
          console.log( dados );
          this.router.navigate(['/alunos']);
          //alert ( JSON.stringify( dados ) );
          this.toastr.success('Aluno criado com sucesso')
        }
      );
  }

  private updateAluno(id, aluno){
    this.alunoService.updateAluno(id,aluno)
      .subscribe(
        (dados)=>{
          console.log( dados );
          this.router.navigate(['/alunos']);
        //  alert ( JSON.stringify( dados ) );
          this.toastr.success('Aluno alterado com sucesso')
        }
      );
  }

  private getOneAluno(id){
    this.alunoService.getOneAluno(id)
      .subscribe(
        (dados)=>{
          console.log (dados);
          this.meuForm.patchValue(dados);
        }
      );
  }

}
