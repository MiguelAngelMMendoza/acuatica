import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { GaleriaComponent } from './components/galeria.component';
import { NatacionComponent } from './components/natacion.component';
import { QuienesSomosComponent } from './components/quienes-somos.component';
import { RehabilitacionComponent } from './components/rehabilitacion.component';
import { SalonComponent } from './components/salon.component';

const appRoutes: Routes = [
	{path: '', component: NatacionComponent},
	{path: 'galeria', component: GaleriaComponent},
	{path: 'natacion', component: NatacionComponent},
	{path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'rehabilitacion', component: RehabilitacionComponent},
    {path: 'salon', component: SalonComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);