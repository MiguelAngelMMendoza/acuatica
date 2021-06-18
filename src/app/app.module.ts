import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './components/galeria.component';
import { NatacionComponent } from './components/natacion.component';
import { QuienesSomosComponent } from './components/quienes-somos.component';
import { RehabilitacionComponent } from './components/rehabilitacion.component';
import { SalonComponent } from './components/salon.component';


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    NatacionComponent,
    QuienesSomosComponent,
    RehabilitacionComponent,
    SalonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
