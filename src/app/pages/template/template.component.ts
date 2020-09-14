import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Jose Luis',
    apellido: 'Moreno',
    correo: 'josemoreno@gmail.com',
    pais: 'COL',
    // tslint:disable-next-line: quotemark
    genero: "M"
  };

  paises: any[] = [];

  constructor( private paisServices: PaisService ) { }

  ngOnInit(): void {
    this.paisServices.getPaises().subscribe( resp => {
      this.paises = resp;

      this.paises.unshift({
        nombre: 'Seleccione un pais',
        codigo: ''
      });
      // console.log(this.paises);
    } );
  }


  // tslint:disable-next-line: typedef
  guardar( form: NgForm ) {
    console.log(form);
    if ( form.invalid ) {
      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(form.value);
  }

}
