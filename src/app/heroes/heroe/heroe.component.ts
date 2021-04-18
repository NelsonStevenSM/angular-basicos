import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})


export class HeroeComponent {

    nombre: string = "Ironman";
    edad: number = 45;
    //propiedad
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    //método o función
    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad} `;
    }

    cambiarNombre(): void{
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void {
        this.edad = 34;
    }



}