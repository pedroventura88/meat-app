import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  /*Esse array de RadioOptions, será passado para o radio.component.html, através do Property Binding [options]="paymentOptions que está
   no order.component.html "*/
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
