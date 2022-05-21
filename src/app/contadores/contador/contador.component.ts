import { Component } from '@angular/core';
//El decorador component lleva un objeto con 2 propiedades como mínimo
//el selector que es el nombre que el componente va a tener (en el index.html podemos ver la etiqueta)
//el templateUrl donde especificamos el archivo html que se va a mostrar
//el template nos permite definir coloca lo q metamos en el , en el index
//template:'<span>Me llamo Victor</span>'
@Component({
  selector: 'app-contador',
  template: `
    <h1>HOLA MUNDO</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="sumar()"> +{{base}} </button>
    <span>{{ contador }}</span>
    <button (click)="restar()"> -{{base}} </button>
  `

})
export class ContadorComponent {
  title = 'bases';
  contador : number = 10;

  base : number = 5;
  sumar(){
    this.contador = this.contador + 5
  }

  restar(){
    this.contador = this.contador - 5
  }
}