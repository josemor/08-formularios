import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importación del formsModule para impedir el refresh del boton guardar.
// ReactiveFormsModule: Para la importacion de formulario Reactivos.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Peticion Http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
