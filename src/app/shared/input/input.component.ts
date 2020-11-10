import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  /* Esse input será referenciado no HTML, substituindo a variável de input #,
  * usada para pegar a referência da tag */
  input: any;

  /* Para passar um valor numa propriedade, é preciso associa-la com o decorator @Input.
  * Dessa forma, os valores das variaveis poderão ser informados de fora. */
  @Input() label: string;
  @Input() errorMessage: string;

  /*O COntentChild será utilizado p/ passar os valores do */
  @ContentChild(NgModel) model: NgModel;

  constructor() {
  }

  ngOnInit() {
  }

  /*Método da interface AfterContentInit.
  * Esse método vai ser chamado exatamente quando o conteúdo for definido,
  * ou seja, conteúdo que vai ficar no lugar do ng-content, for definido.
  * É quando vai pegar a referencia que foi atribuida ao NgModel, e atribuir ao Input*/
  ngAfterContentInit() {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
