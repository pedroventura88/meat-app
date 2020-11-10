import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
/* A INTENÇÃO DE CRIAR ESSE PROVIDER NG_VALUE_ACESSOR, É FAZER COM ESSE COMPONENT SE TORNE ACESSÍVEL PELAS DIRETIVAS (ex ngModel, ngForm)*/

export class RadioComponent implements OnInit, ControlValueAccessor {

  /* Como é uma opção que vem de fora, é necessario marca-la com o decorator @Input */
  @Input() options: RadioOption[];
  value: any;

  /* variável criada para salvar a função do método registerOnChange */
  /* Sempre que o valor mudar, tem que chamar essa função onChange passando o novo valor */
  onChange: any;

  constructor() {
  }

  ngOnInit() {
  }

  /* IMPLEMENTAÇÃO DA INTERFACE ControlValueAccessor. */

  /* Como o valor da função é alterado neste metodo abaixo, o onChange deve ser chamado aqui, recebendo como parametro */
  /* o novo valor atribuido. Dessa forma, consigo avisar as diretivas que estão usando o meu componente, que o valor mudou. */
  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  /* IMPLEMENTAÇÃO DA INTERFACE ControlValueAccessor. */
  /* É passada uma função, onde essa função tem que ser chamada sempre que o valor interno do componente mudar */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /* IMPLEMENTAÇÃO DA INTERFACE ControlValueAccessor. METODO NÃO SERÁ UTILIZADO */
  registerOnTouched(fn: any): void {
  }

  /* IMPLEMENTAÇÃO DA INTERFACE ControlValueAccessor. METODO NÃO SERÁ UTILIZADO */
  setDisabledState(isDisabled: boolean): void {
  }

  /* IMPLEMENTAÇÃO DA INTERFACE ControlValueAccessor. */
  /* É um método chamado pelas Diretivas (ex: ngModel), quando elas querem passar algum valor para o componente.*/
  writeValue(obj: any): void {
    this.value = obj;
  }
}
