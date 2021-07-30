import { Component } from '@angular/core';

@Component({
	selector: 'quienes-somos',
<<<<<<< HEAD
	templateUrl: '../views/quienes-somos.html',
	styleUrls: ['../css/quienes-somos.component.css']
=======
	templateUrl: '../views/quienes-somos.html'
>>>>>>> 6be5d378c104259df056e1c3756b179b03b973e7
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