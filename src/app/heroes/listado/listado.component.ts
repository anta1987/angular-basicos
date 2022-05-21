import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];

  heroesBorrado : string ='';

  borrandoHeroe () {
    this.heroesBorrado = this.heroes.shift() || '...';
  }
  // esBorrado (heroesBorrado:string){
  //   if(heroesBorrado === '...'){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
}
