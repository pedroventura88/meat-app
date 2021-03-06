import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService) {
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQtd(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }
}
