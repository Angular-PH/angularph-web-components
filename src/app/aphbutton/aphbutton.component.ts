import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aphbutton',
  standalone: true,
  templateUrl: './aphbutton.component.html',
  styleUrls: ['./aphbutton.component.scss']
})
export class APHButtonComponent {

  @Input() name: string = 'Button';
  @Input() color: string = 'primary';
  @Output() onClick = new EventEmitter();


  click() {
    this.onClick.emit();
  }
}
