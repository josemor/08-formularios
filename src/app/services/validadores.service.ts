import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ErrorValidate } from '../interfaces/errorValidate.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noRecibir(control: FormControl): ErrorValidate {
    if (control.value?.toLowerCase() === 'moreno') {
      return {
        noRecibir: true
      }
    }
    return null;
  }

  // tslint:disable-next-line: typedef
  passwordsIguales( passUno: string, passDos: string){

    return( formGrup: FormGroup ) => {

      const passUnoControl = formGrup.controls[passUno];
      const passDosControl = formGrup.controls[passDos];

      if ( passUnoControl.value === passDosControl.value ) {
        passDosControl.setErrors(null);
      } else {
        passDosControl.setErrors({ noEsIgual: true });
      }

    };
  }

  // tslint:disable-next-line: typedef
  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if ( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        if ( control.value === 'spiderman') {
          resolve({ existe: true });
        } else {
          resolve( null );
        }
      }, 3500);
    });
  }

}
