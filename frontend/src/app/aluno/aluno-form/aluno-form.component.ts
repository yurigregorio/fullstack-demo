import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  public meuForm : FormGroup;
  isEdicao : boolean = false;
  idAluno : number = 0;

  constructor(
    private alunoService : AlunoService, 
    private formBuilder       : FormBuilder,
    private actvatedRoute     : ActivatedRoute) {
      this.meuForm = this.formBuilder.group({
      //valor inicial e os validadores..
      nome : ['', [ Validators.required, Validators.maxLength(25)] ],
      ra : ['', [ Validators.required ] ],
      curso : ['', [ Validators.required] ],

    });
   }

    ngOnInit(): void {
      this.actvatedRoute.params
      .subscribe(
        (parametros) =>{
          if (parametros.id){
            this.isEdicao = true;
            this.idAluno = parametros.id;
            this.getOneAluno(parametros.id);
          }
        }
      );
    }

    onSubmit(){
      if (this.isEdicao){
        this.updateAluno(this.idAluno, this.meuForm.value);
      }
      else{
        this.createAluno(this.meuForm.value);
      }
     

    }

    private createAluno (aluno : any){
      this.alunoService.createAluno(aluno)
      .subscribe(
        (dados) =>{
          console.log(dados);
          alert ( JSON.stringify(dados));
        }
      );
    }

    public isErrorField(fieldName){
      return (this.meuForm.get(fieldName).valid==false && this.meuForm.get(fieldName).touched==true);
    }

    private getOneAluno(id){
      this.alunoService.getOneAluno(id)
      .subscribe(
        (dados) =>{
          console.log(dados);
          this.meuForm.patchValue(dados);
        }
      );
    }

    private updateAluno(id, aluno){
      this.alunoService.updateAluno(id,aluno)
      .subscribe(
        (dados)=>{
          console.log(dados);
          alert (JSON.stringify(dados));
        }
      );
    }
  }

