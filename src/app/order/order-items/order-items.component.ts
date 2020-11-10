import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  /* Sempre que houver uma propriedade que vai ser infomada por um component Parent, é necessário utilizar o decoration @Input*/
  @Input() items: CartItem[];

  @Output() increaseQuantity = new EventEmitter<CartItem>();
  @Output() decreaseQuantity = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() {
  }

  ngOnInit() {
  }

  /*Nesse método, é necessário receber um item, para poder emitir o evento baseado nesse item*/
  emitIncreseQuantity(item: CartItem) {
    this.increaseQuantity.emit(item);
  }

  emitDecreseQuantity(item: CartItem) {
    this.decreaseQuantity.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }



}
