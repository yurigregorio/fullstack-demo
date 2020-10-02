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

  public meuForm : FormGroup;
  isEdicao : boolean = false;
  idAluno : number = 0;
  textoBotao :string = 'Salvar';

  constructor(
    private alunoService : AlunoService,
    private formBuilder       : FormBuilder,
    private activatedRoute     : ActivatedRoute,
    private router            : Router,
    private toastr            : ToastrService)

    {
      this.meuForm = this.formBuilder.group({
      //valor inicial e os validadores..
      nome : ['', [ Validators.required, Validators.maxLength(25)] ],
      ra : ['', [ Validators.required ] ],
      curso : ['', [ Validators.required] ],

    });
   }

    ngOnInit(): void {
      this.activatedRoute.params
      .subscribe(
        (parametros) =>{
          if (parametros.id){
            this.isEdicao = true;
            this.idAluno = parametros.id;
            this.getOneAluno(parametros.id);
            this.textoBotao = 'Editar'
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
          this.toastr.success("Aluno criado com sucesso!")
          this.router.navigate(['/alunos']);
          //alert ( JSON.stringify(dados));

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
          this.toastr.success("Aluno alterado com sucesso!")
          this.router.navigate(['/alunos']);
          alert (JSON.stringify(dados));
        }
      );
    }
  }

