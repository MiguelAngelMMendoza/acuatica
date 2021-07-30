import { Component } from '@angular/core';

@Component({
	selector: 'galeria',
	templateUrl: '../views/galeria.html',
	styleUrls: ['../css/galeria.component.css']
})
export class GaleriaComponent {
	public titulo:string;

	constructor(){
		this.titulo = "Galería"
	}

	ngOnInit(){
		console.log("Componente galeria.component.ts cargado");
	}
}