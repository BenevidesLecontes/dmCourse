import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPonto } from './app.component';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Injectable()
export class PontosService {

  constructor(private http: HttpClient) { 

  }

  buscarPontos(): Observable<IPonto>{
    return this.http.get<IPonto>('http://localhost:3000/pontos').pipe(share());
  }

}
