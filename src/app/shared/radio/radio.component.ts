import { Component, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  /* Como é uma opção que vem de fora, é necessario marca-la com o decorator @Input */
  @Input() options: RadioOption[];
  value: any;

  constructor() {
  }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
  }
}
