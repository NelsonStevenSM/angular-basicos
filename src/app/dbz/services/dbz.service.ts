import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
/*
Es una clase abstracta en la cual nosotros colocaremos información y los métodos
para interactuar con fuentes externas o para manipular el estado de la información de la aplicación
*/

@Injectable()
export class DbzService {


  private _personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];

  get personajes(): Personaje[]{
      return [...this._personajes];
  }
  
    constructor (){
        console.log("Servicio inicializado");
    }

    agregarPersonaje( personaje: Personaje){
        this._personajes.push(personaje);
    }
}