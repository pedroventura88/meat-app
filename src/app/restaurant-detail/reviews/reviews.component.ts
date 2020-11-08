import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    /*Nesse caso, é necessário utilizar o .parent, pois as reviews são filhas de restaurant..
    * Por ser filha, veja-se como se tivesse que descer mais um nível para acessa-la (usando parent) */
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
