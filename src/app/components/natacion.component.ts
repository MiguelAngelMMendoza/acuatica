import { Component } from '@angular/core';

@Component({
	selector: 'natacion',
	templateUrl: '../views/natacion.html',
	styleUrls: ['../css/natacion.component.css']
})
export class NatacionComponent {
	public titulo:string;

	constructor(){
		this.titulo = "Natación"
	}

	ngOnInit(){
		console.log("Componente natacion.component.ts cargado");
	}
}