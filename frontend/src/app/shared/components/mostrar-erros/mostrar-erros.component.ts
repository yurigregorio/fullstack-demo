import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mostrar-erros',
  templateUrl: './mostrar-erros.component.html',
  styleUrls: ['./mostrar-erros.component.scss']
})
export class MostrarErrosComponent implements OnInit {

  //decorator = recebe dados de outros componentes >@Input()<
  @Input() public isError  : boolean = false;
  @Input() public mensagem : string;


  //OUTPUT envia ..
  @Output() public notificador = new EventEmitter();
 
  
  constructor() { }

  ngOnInit(): void {
  }

  onDivClick(){
    this.notificador.emit(true);
  }
}

