import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  public meuForm  : FormGroup;
  isEdicao  : boolean = false;
  idCategoria : number = 0;
  textoBotao : string = 'Salvar'

  constructor(
    private categoriaService : CategoriaService,
    private formBuilder      : FormBuilder,
    private activatedRoute   : ActivatedRoute,
    private router           : Router,
    private toastr           : ToastrService)

    {
      this.meuForm = this.formBuilder.group({
      nome : ['', [ Validators.required, Validators.maxLength(25)] ],
      descricao : ['', [ Validators.required ] ]
    });
   }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      (parametros) =>{
        if (parametros.id){
          this.isEdicao = true;
          this.idCategoria = parametros.id;
          this.getOneCategoria(parametros.id);
          this.textoBotao = 'Editar'
        }
      }
    );
  }

  onSubmit(){
    if (this.isEdicao){
      this.updateCategoria(this.idCategoria, this.meuForm.value);
    }
    else{
      this.createCategoria(this.meuForm.value);
    }


  }

  private updateCategoria(id, categoria){
    this.categoriaService.updateCategoria(id,categoria)
    .subscribe(
      (dados)=>{
        console.log(dados);
        this.toastr.success("Categoria alterado com sucesso!")
        this.router.navigate(['/categorias']);
        alert (JSON.stringify(dados));
      }
    );
  }

  private createCategoria (aluno : any){
    this.categoriaService.createCategoria(aluno)
    .subscribe(
      (dados) =>{
        console.log(dados);
        this.toastr.success("Categoria criada com sucesso!")
        this.router.navigate(['/categorias']);
        //alert ( JSON.stringify(dados));

      }
    );
  }

  public isErrorField(fieldName){
    return (this.meuForm.get(fieldName).valid==false && this.meuForm.get(fieldName).touched==true);
  }

  private getOneCategoria(id){
    this.categoriaService.getOneCategorias(id)
      .subscribe(
        (dados) =>{
          console.log(dados);
          this.meuForm.patchValue(dados);
        }
      );
  }

}
