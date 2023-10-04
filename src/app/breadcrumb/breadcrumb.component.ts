import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  template: `
    <div class="breadcrumb">
      <span *ngFor="let item of items; let i = index">
      <span *ngIf="i> 0" (click)="click(i, item)" class="divider" > / </span>
      <span class="crumb">{{ item }}</span>
    </span>
    </div>
    `,
  styles: [
    `
     .crumb {
       cursor:pointer;
       font-size: 20px;
     }
     .crumb:hover {
       text-decoration: underline;
     }
    `
  ],
  imports: [CommonModule]
})
export class APHBreadcrumbComponent implements AfterViewInit {
  @Input() data: string = '';
  @Output() onClick = new EventEmitter<{ index: number, item: string }>();
  items = [];
  constructor() {

  }

  public ngAfterViewInit(): void {
    try {
      this.items = JSON.parse(this.data)
    } catch (e) {

      console.error(e);
    }
  }

  public click(index: number, item: string) {
    this.onClick.emit({ index, item });
  }
}
