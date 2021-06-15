import { Component } from '@angular/core';

@Component({
	selector: 'salon',
	templateUrl: '../views/salon.html'
})
export class SalonComponent {
	public titulo:string;

	constructor(){
		this.titulo = "Salón"
	}

	ngOnInit(){
		console.log("Componente salon.component.ts cargado");
	}
}