import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {BeneficiosComponent} from './beneficios/beneficios.component';
import {HistoricoComponent} from './historico/historico.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { TesteComponent } from './teste/teste.component';
import { ClientesService } from './clientes.service';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TelefonePipe } from './telefone.pipe';
import { FormatadataDirective } from './formatadata.directive';
import { SonumerosDirective } from './sonumeros.directive';

registerLocaleData(localePt, 'pt');

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
    TesteComponent,
    DadosClienteComponent,
    TelefonePipe,
    FormatadataDirective,
    SonumerosDirective
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
  providers: [ClientesService, 
    {provide: LOCALE_ID, useValue : 'pt'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
