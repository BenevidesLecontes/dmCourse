import { IPonto } from './../app.component';
import { share } from 'rxjs/Operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PontosService {

  constructor(private http: HttpClient) { 

  }

  listarPontos() : Observable<IPonto>{
    return this.http.get<IPonto>('http://localhost:3000/pontos').pipe(share());
  }


}
