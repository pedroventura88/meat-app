import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) {
  }

  /* Todas as injeções / dependências que tiverem sido atribuídas
  ao componente, serão carregadas pelo ngOnInit */
  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants();
  }

}
