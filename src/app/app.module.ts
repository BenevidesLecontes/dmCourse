import {BrowserModule} from '@angular/platform-browser';
<<<<<<< HEAD
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID} from '@angular/core';
=======
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
>>>>>>> origin/master


import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {BeneficiosComponent} from './beneficios/beneficios.component';
import {HistoricoComponent} from './historico/historico.component';
<<<<<<< HEAD
import { ClientlistComponent } from './clientlist/clientlist.component';
import { TesteComponent } from './teste/teste.component';
import { ClientesService } from './clientes.service';
import { PontoClienteComponent } from './ponto-cliente/ponto-cliente.component';
import { PontosService } from './pontos.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');
=======
import {ClientlistComponent} from './clientlist/clientlist.component';
import {ClientesService} from './clientes.service';
import {StatusItemComponent} from './status-item/status-item.component';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
>>>>>>> origin/master

registerLocaleData(localePt, 'pt');
const routes: Route[] = [
  {path: 'transacoes', component: TransacoesComponent},
  {path: 'beneficios', component: BeneficiosComponent},
  {
    path: 'historico',
    component: HistoricoComponent
  },
  {
    path: '',
    redirectTo: '/transacoes',
    pathMatch: 'full'
  },
  {path: '**', component: TransacoesComponent}];

@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    BeneficiosComponent,
    HistoricoComponent,
    ClientlistComponent,
<<<<<<< HEAD
    TesteComponent,
    PontoClienteComponent
=======
    StatusItemComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
<<<<<<< HEAD
  providers: [
    ClientesService,
    PontosService,
=======
  providers: [ClientesService,
>>>>>>> origin/master
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
