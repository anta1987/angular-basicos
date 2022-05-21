import { Component } from '@angular/core';
//El decorador component lleva un objeto con 2 propiedades como mínimo
//el selector que es el nombre que el componente va a tener (en el index.html podemos ver la etiqueta)
//el templateUrl donde especificamos el archivo html que se va a mostrar
//el template nos permite definir coloca lo q metamos en el , en el index
//template:'<span>Me llamo Victor</span>'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
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
