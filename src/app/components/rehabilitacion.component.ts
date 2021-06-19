import { Component } from '@angular/core';

@Component({
	selector: 'rehabilitacion',
	templateUrl: '../views/rehabilitacion.html',
	styleUrls: ['../css/rehabilitacion.component.css']
})
export class RehabilitacionComponent {
	public titulo:string;

	constructor(){
		this.titulo = "Rehabilitación"
	}

	ngOnInit(){
		console.log("Componente rehabilitacion.component.ts cargado");
	}
}