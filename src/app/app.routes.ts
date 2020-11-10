import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},  /* caso não haja path especificado, deve redirecionar para HOME*/
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      /*o redirectTo abaixo, será definiar que o componente default que será apresentado
      * na página de detalhes do restaurante, será o MENU */
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order', component: OrderComponent}
];
