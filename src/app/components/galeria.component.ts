import { Component } from '@angular/core';

@Component({
	selector: 'galeria',
	templateUrl: '../views/galeria.html'
})
export class GaleriaComponent {
	public titulo:string;

	constructor(){
		this.titulo = "Natación"
	}

	ngOnInit(){
		console.log("Componente natacion.component.ts cargado");
	}
}