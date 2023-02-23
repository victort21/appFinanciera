import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { pattern } from '../interfaces/validator';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  selectedIndex = 0;

  private _clientes:any[] = [];

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
    imagenesGarantia: [[''], [ Validators.required ] ],
    //DOCUMENTACION
    tipoDocumentacion: ['', [ Validators.required ] ],
    imagenesDocs: [[''], [ Validators.required ] ],
    //CREDITO
    producto: [{value: 'Microfondo', disabled: true}, [ Validators.required ] ],
    periodicidad: ['', [ Validators.required ] ],
    monto: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    plazo: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    numeroCuotas: [{value: 0, disabled: true}, [ Validators.required ] ],
  });

  confirmacion = this.fb.group({
    recomindaCredito: ['', [Validators.required] ],
    comentarios: ['', [ Validators.required ] ],
    desembolso: ['', [ Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    ticket: [''],
  });

  get clientes() {
    return [...this._clientes];
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  selectTab(i: number): void {
    this.selectedIndex = i;
    console.log(this.selectedIndex);
  }

  getClientes() {
    return this.http.get('http://localhost:3000/clientes');
  }

  guardarCliente() {
    this.http.post('http://localhost:3000/clientes', this.formularioCliente.value)
            .subscribe(() => {});
    
    this.formularioCliente.reset();
  }

  getCliente(id: string) {
    return this.http.get(`http://localhost:3000/clientes/${id}`);
  }
}
