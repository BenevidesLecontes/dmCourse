<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICliente, IDadosCliente } from './app.component';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';
=======
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ICliente} from './app.component';
import {share} from 'rxjs/operators';

export interface IPontos {
  total: number;
  utilizados: number;
  expirados: number;
}
>>>>>>> origin/master

@Injectable()
export class ClientesService {

<<<<<<< HEAD
  constructor(private http: HttpClient) { }

  buscarClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>('http://localhost:3000/clientes').pipe(share());
  } 

  getDadosCliente(): Observable<IDadosCliente>{
    return this.http.get<IDadosCliente>('http://localhost:3000/pontos').pipe(share());
=======
  constructor(private http: HttpClient) {
  }

  buscarClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>('/api/clientes').pipe(share());
  }

  buscarPontos(): Observable<IPontos> {
    return this.http.get<IPontos>('/api/pontos').pipe(share());
>>>>>>> origin/master
  }

}
