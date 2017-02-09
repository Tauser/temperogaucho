import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {

  api:string = 'http://www.temperogauchoce.com.br/temperogaucho/api/';

  constructor(public http: Http) {}
    getData(parametro:string){
      return this.http.get( this.api + parametro).map(res => res.json())

    }


}
