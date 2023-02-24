import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [`
    @media(min-width: 600px) {
      section {
        max-width: 70%;
      }
    }
    @media(min-width: 992px) {
      section {
        max-width: 50%;
      }
    }
    .max-w-400 {
      max-width: 380px;
    }
  `]
})
export class ListaComponent implements OnInit {

  clientes: any;

  constructor(public clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(cliente => this.clientes = cliente);
  }
  


}
