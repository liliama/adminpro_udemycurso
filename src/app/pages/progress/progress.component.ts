import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 60;
  progreso2: number = 20;

  constructor() { }

  ngOnInit() {
  }

  // cambiarValor( valor: number) {

  //   if ( this.progreso >= 100 && valor > 0) {
  //     this.progreso = 100;
  //     return;
  //   }

  //   if ( this.progreso <= 0 && valor <= 0 ) {
  //     this.progreso = 0;
  //     return;
  //   }

  //   this.progreso = this.progreso + valor;
  // }


  Actualizar( event: number ) {
    console.log('Evento', event);
  }

}
