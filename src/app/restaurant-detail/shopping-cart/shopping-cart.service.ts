import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {

  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    /*Variavel foundItem criada, que irá conter se o item do Menu foi encontrado no carrinho */
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      /* Se o item não foi encontrado, irá criar um novo Item no carrinho*/
      this.items.push(new CartItem(item));
    }

  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    /*primeiro faz o map, trocando de CartIem, para o valor do item do carrinho,
    * segundo faz o reduce, somando o valor anterior + o valor atual,
    * terceiro inicia-se o valor com 0.*/
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
