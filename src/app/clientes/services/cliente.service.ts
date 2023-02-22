import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { pattern } from '../interfaces/validator';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  selectedIndex = 0;

  formularioCliente = this.fb.group({
    //DATOS GENERALES
    identificacion: ['', [Validators.required] ],
    carnetOcedula: [{value: '', disabled: true}, [Validators.required, Validators.pattern(pattern.numeros)  ] ],
    nombres: ['', [Validators.required, Validators.pattern(pattern.nombres) ]  ],
    primerApellido: ['', [Validators.required, Validators.pattern(pattern.letras) ] ],
    segundoApellido: ['', [Validators.required, Validators.pattern(pattern.letras) ] ],
    genero: ['M', [Validators.required] ],
    fechaNac: ['', [Validators.required] ],
    estadoCivil: ['', [Validators.required] ],
    nombreConyugue: ['', [ Validators.pattern(pattern.letras) ] ],
    DNI: ['', [Validators.pattern(pattern.numeros) ]],
    lugarTrabajo: ['', Validators.pattern(pattern.letras)],
    residencia: ['', [Validators.required] ],
    dependientes: ['', [Validators.required, Validators.pattern(pattern.numeros)] ],
    municipio: [''],
    colonia: ['', [Validators.required] ],
    calle: ['', [Validators.required] ],
    casa: ['', [Validators.required, Validators.pattern(pattern.noDecimales)] ],
    referencia: ['', [Validators.required] ],
    tiempoResidir: ['', [Validators.required]],
    numeroCelular1: ['', [Validators.required]],
    numeroCelular2: ['', [Validators.required]],
    telefonoFijo: ['', [Validators.required]],
    correo: ['', []],
    //AVAL
    avalNombres: ['', [Validators.required, Validators.pattern(pattern.nombres)]  ],
    avalPrimerApellido: ['',  [ Validators.required, Validators.pattern(pattern.letrasSpaces)]  ],
    avalSegundoApellido: ['', [ Validators.required, Validators.pattern(pattern.letrasSpaces)]],
    avalCedula: ['', [Validators.required, Validators.pattern(pattern.noDecimales)] ],
    avalMunicipio: ['', [ Validators.required] ],
    avalColonia: ['', [ Validators.required ] ],
    avalCalle: ['', [ Validators.required ] ],
    avalCasa: ['', [ Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    avalReferencia: ['', Validators.required],
    avalCelular: ['', [Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    avalTelefonoFijo: ['', [Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    avalFechaNac: ['', [ Validators.required ] ],
    avalGenero: ['M', [ Validators.required ] ],
    avalEstadoCivil: ['', Validators.required],
    //GARANTIAS
    nombreArticulo: ['', [ Validators.required ] ],
    precioArticulo: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    //DOCUMENTACION
    tipoDocumentacion: ['', [ Validators.required ] ],
    //CREDITO
    producto: [{value: 'Microfondo', disabled: true}, [ Validators.required ] ],
    periodicidad: ['', [ Validators.required ] ],
    monto: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    plazo: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    numeroCuotas: [{value: 0, disabled: true}, [ Validators.required ] ],
  });

  constructor(private fb: FormBuilder) { }

  selectTab(i: number): void {
    this.selectedIndex = i;
    console.log(this.selectedIndex);
  }
}
