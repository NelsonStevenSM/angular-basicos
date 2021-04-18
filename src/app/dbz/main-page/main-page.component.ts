import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

 /* personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];*/

  /*get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }*/

  nuevo:Personaje = {
    nombre: 'Maestro',
    poder: 1000
  }

/*  agregarNuevoPersonaje( argumento: Personaje){
    this.personajes.push(argumento );
  }*/
// se conoce como una inyección de dependencias y esto es super fuerte
// Estamos inyectando el servicio en este constructor
  //constructor(private dbzService: DbzService){
  constructor(){
      //this.personajes = this.dbzService.personajes;
  }
  /*cambiarNombre(event:i any){
    console.log(event.target.value);
    
  }*/

/*  agregar(){
    //event.preventDefault();
    //console.log(this.nuevo);
    //trim : ahora espacio en blanco
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);

  }*/


}
