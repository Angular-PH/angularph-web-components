import { Component, Input, Output, EventEmitter } from '@angular/core';

type InputValue = string | number | undefined;
type inputType = 'text' | 'number' | 'email';

@Component({
  selector: 'app-aphinput',
  standalone: true,
  template: `
    <input [type]="type" [class]="className" [value]="value" [placeholder]="placeholder || ''" (input)="onInput($event)">
  `,
  styles: [
  ]
})
export class APHInputComponent {
  @Input() type: inputType = 'text';
  @Input() className: string = '';
  @Input() value: InputValue = '';
  @Input() placeholder: string = '';

  @Output() valueChange = new EventEmitter<InputValue>(undefined);

  onInput($event: Event){
    const target = $event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }






}
