import { getTestBed } from '@angular/core/testing';
import { IClient } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/Operators';

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) { 

  }

  buscarClients() : Observable<IClient[]>{
    return this.http.get<IClient[]>('http://localhost:3000/clientes').pipe(share());
  }

}
