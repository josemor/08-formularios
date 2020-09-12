import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Jose',
    apellido: 'Moreno',
    correo: 'josemoreno@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
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
