import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  /*É necessário adicionar o @Input, pois o essa propriedade será fornecida pelo componente Parent */
  @Input() menuItem: MenuItem;
  /* Todos os eventos são marcados com a propriedade @Output*/
  @Output() add = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
}
