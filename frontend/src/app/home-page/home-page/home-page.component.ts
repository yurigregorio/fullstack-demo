import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public homeApi : any = [];
  public imagemSlide1 : any = [];
  public imagemSlide2 : any = [];
  public imagemSlide3 : any = [];
  public imgProd : any = [];
  public imgSlide1 : any;

  constructor(private homeService : HomePageService) { }

  ngOnInit(): void {
    this.getAllProdutos();
    this.getImagem1();
    this.getImagem2();
    this.getImagem3();
  }

  public getAllProdutos(){
    this.homeService.getAllProdutosApi()
    .subscribe(
      ( resultado ) => {
        console.log ( resultado );
        this.homeApi = resultado;

      }
    );
    }

  public getImagem1(){
      this.homeService.getOneProduto(1)
        .subscribe(
          (dados)=>{
            console.log (dados);
            this.imagemSlide1 = dados;
            this.imagemSlide1 = this.imagemSlide1.imagens[0].url;
            console.log (this.imagemSlide1);

          }
        );
    }

    public getImagem2(){
      this.homeService.getOneProduto(2)
        .subscribe(
          (dados)=>{
            console.log (dados);
            this.imagemSlide2 = dados;
            this.imagemSlide2 = this.imagemSlide2.imagens[0].url;
            console.log (this.imagemSlide2);

          }
        );
    }

    public getImagem3(){
      this.homeService.getOneProduto(3)
        .subscribe(
          (dados)=>{
            console.log (dados);
            this.imagemSlide3 = dados;
            this.imagemSlide3 = this.imagemSlide3.imagens[0].url;
            console.log (this.imagemSlide3);

          }
        );
    }

}
