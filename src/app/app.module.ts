import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EstadosComponent } from './estados/estados.component';
import { MunicipiosComponent } from './municipios/municipios.component';

import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    MunicipiosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
