import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private validadoresSercices: ValidadoresService
             ) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }
  // tslint:disable-next-line: typedef
  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  // tslint:disable-next-line: typedef
  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }
  // tslint:disable-next-line: typedef
  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }
  // tslint:disable-next-line: typedef
  get paisNoValido() {
    return this.forma.get('direccion.pais').invalid && this.forma.get('direccion.pais').touched;
  }
  // tslint:disable-next-line: typedef
  get ciudadNoValido() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }
  // tslint:disable-next-line: typedef
  get passUnoNoValido() {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }
  // tslint:disable-next-line: typedef
  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }
  // tslint:disable-next-line: typedef
  get passDosNoValido() {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return ( pass1 === pass2 ? false : true );
  }

  // tslint:disable-next-line: typedef
  crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre  : ['', [Validators.required, Validators.minLength(2)]], // ['valorePorDefecto'], Sincrono, validar Asincrono
      apellido: ['', [Validators.required, this.validadoresSercices.noRecibir]],
      usuario : ['', , this.validadoresSercices.existeUsuario],
      correo  : ['', [Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$'), Validators.required]],
      pass1   : ['', Validators.required],
      pass2   : ['', Validators.required],
      direccion: this.formBuilder.group({
        pais: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validadoresSercices.passwordsIguales('pass1', 'pass2')
    });
  }

  // tslint:disable-next-line: typedef
  cargarDataAlFormulario() {
    // this.forma.setValue({ // setValue se tiene que cumplir con la estructura predefinida.
    //  reset puede escoger los campor predefinidos.
    this.forma.reset({
      nombre  : 'Jose Luis',
      apellido: 'Moreno Ospina',
      correo  : 'josel.moreno@gmail.com',
      pass1   : '123',
      pass2   : '123',
      direccion: {
        pais: 'Colombia',
        ciudad: 'Bogotá'
      }
    });

    // Cargar datos predeterminados
   //  ['Juagar', 'Dormir'].forEach( valor => this.pasatiempos.push( this.formBuilder.control(valor)));
  }

  // tslint:disable-next-line: typedef
  agregarPasatiempo() {
    this.pasatiempos.push( this.formBuilder.control( '' ));
  }

  // tslint:disable-next-line: typedef
  borrarPasatiempos( indice: number ) {
    this.pasatiempos.removeAt(indice);
  }
  // tslint:disable-next-line: typedef
  guardar() {
    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    // Posteo de la información
    this.forma.reset({

    });

  }



}
