import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-ver-info',
  templateUrl: './ver-info.component.html'
})
export class VerInfoComponent implements OnInit {

  id: string = '';
  cliente: any = {};

  constructor(private activatedRoute: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.clienteService.getCliente(id) )
        )
        .subscribe(cliente => this.cliente = cliente);
  }





}
