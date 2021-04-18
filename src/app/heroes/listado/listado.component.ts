import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{ //implements OnInit {

  // constructor() { }
  // inicializar cosas e.g 
  // petición de un servicio y se traen la información
 // ngOnInit(): void {
  //}
  //propiedad:
  heroeBorrado: string = '';
  heroes: string[] = ["Spiderman", "Ironman", "Goku", "Hulk"];

  borrarHeroe(){
    //this.heroes = this.heroes.splice(1);
    this.heroeBorrado = this.heroes.shift() || "";
    console.log(this.heroeBorrado);
  }

}
