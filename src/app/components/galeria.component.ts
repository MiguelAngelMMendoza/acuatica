import { Component } from '@angular/core';

@Component({
	selector: 'galeria',
<<<<<<< HEAD
	templateUrl: '../views/galeria.html',
	styleUrls: ['../css/galeria.component.css']
=======
	templateUrl: '../views/galeria.html'
>>>>>>> 6be5d378c104259df056e1c3756b179b03b973e7
})
export class GaleriaComponent {
	public titulo:string;

	constructor(){
<<<<<<< HEAD
		this.titulo = "Galería"
	}

	ngOnInit(){
		console.log("Componente galeria.component.ts cargado");
=======
		this.titulo = "Natación"
	}

	ngOnInit(){
		console.log("Componente natacion.component.ts cargado");
>>>>>>> 6be5d378c104259df056e1c3756b179b03b973e7
	}
}