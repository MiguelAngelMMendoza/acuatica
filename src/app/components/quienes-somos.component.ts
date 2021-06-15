import { Component } from '@angular/core';

@Component({
	selector: 'quienes-somos',
	templateUrl: '../views/quienes-somos.html'
})
export class QuienesSomosComponent {
	public titulo:string;

	constructor(){
		this.titulo = "¿Quienes somos?"
	}

	ngOnInit(){
		console.log("Componente quienes-somos.component.ts cargado");
	}
}