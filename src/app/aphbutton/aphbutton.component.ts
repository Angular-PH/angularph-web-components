import { Component, Input, Output, EventEmitter } from '@angular/core';

type buttonType = 'button' | 'submit' | 'reset'

@Component({
  selector: 'app-aphbutton',
  standalone: true,
  template: `
            <button [class]="color" [type]="type" (click)="click()">
              <ng-content></ng-content>
            </button>`,
  styles: [
            `button {
              padding: 10px;
              border-radius: 5px;
              border-width: 0;
              background-color: var(--tory-blue-400);
            }

            .primary {
              background-color: var(--tory-blue-400);
            }

            .success {
              background-color: var(--salem-400);
            }

            .danger {
              background-color: var(--tamarillo-400);
            }
            `
  ]
})
export class APHButtonComponent {

  @Input() color: string = 'primary';
  @Input() type: buttonType = 'button'
  @Output() onClick = new EventEmitter();


  click() {
    this.onClick.emit();
  }
}
