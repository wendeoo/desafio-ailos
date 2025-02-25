import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = 'user';
  @Input() label: string = '';
  @Input() text: string = '';
  @Input() type: string = 'profile';
  @Input() account: string = '';
  @Input() duplicateOption: boolean = false;
}
