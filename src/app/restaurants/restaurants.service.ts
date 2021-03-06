import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

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

  /* Metodo irá retornar apenas 1 restaurante por ID*/
  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  /*Método que irá trazer as reviews de um restaurante específico.
  * O retorno é any, por que ainda não sei oq devo retornar */
  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  /*Metodo vai retornar o menu do restaurante que está selecionado*/
  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }
}
