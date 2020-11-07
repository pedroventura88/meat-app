import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ErrorHandler } from '../app.error-handler';

/*Só foi necessário utilizar o @Injectable, porque nesta classe será utilizado o serviço HTTP*/
@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {
  }

  /* Método que irá retornar um array de restaurantes */
  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);

  }
}
