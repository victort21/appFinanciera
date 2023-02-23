import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  clientes:any[] = [];

  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteService.getClientes()
        .subscribe((clientes: any) => this.clientes = clientes);

    // this.clientes = this.clienteService.clientes;
  }

}
