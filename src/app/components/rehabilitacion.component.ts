import { Component } from '@angular/core';

@Component({
	selector: 'rehabilitacion',
	templateUrl: '../views/rehabilitacion.html'
})
export class rehabilitacionComponent {
	public titulo:string;

	constructor(){
		this.titulo = "Rehabilitación"
	}

	ngOnInit(){
		console.log("Componente rehabilitacion.component.ts cargado");
	}
}