import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ClientlistComponent} from './clientlist/clientlist.component';
import {ClientesService} from './clientes.service';
import {debounceTime, filter, take} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

export interface ICliente {
  email?: string;
  nome: string;
  cpf?: string;
  nascimento?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('Cliente') clienteComponent: ClientlistComponent;
  clientes: ICliente[];
  labels = [
    'Saldo',
    'Histórico',
    'Utilizados',
    'Perdidos'
  ];
  mapLabels = {};
  busca: string;
  nome: string;
  data: string;
  formularioBusca: FormGroup;

  constructor(private clientesService: ClientesService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getData();
    this.formularioBusca = this.fb.group({
      busca: new FormControl(null)
    });
  }

  ngAfterViewInit(): void {
  }

  private getData() {
    this.clientesService.buscarClientes()
      .pipe(filter(res => !!res), take(1))
      .subscribe(lista => this.clientes = lista);
    this.clientesService.buscarPontos()
      .pipe(filter(res => !!res), take(1))
      .subscribe(pontos => {
        this.labels.forEach(label => {
          if (pontos.expirados && label === 'Perdidos') {
            this.mapLabels[label] = pontos.expirados;
          }
          if (pontos.total && label === 'Saldo') {
            this.mapLabels[label] = pontos.total - pontos.utilizados - pontos.expirados;
          }
          if (pontos.total && label === 'Histórico') {
            this.mapLabels[label] = pontos.total;
          }
          if (pontos.utilizados && label === 'Utilizados') {
            this.mapLabels[label] = pontos.utilizados;
          }
        });
      });
  }

  ngOnDestroy(): void {
  }

  subimitted() {
    this.clientesService.buscarClientes(this.formularioBusca.value.busca).subscribe(response => {
      this.clientes = response;
    });
  }
}
