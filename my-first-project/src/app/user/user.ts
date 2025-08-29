import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: true,
  imports: []
})
export class UserComponent {
  @Input() name: string = 'John Doe';
  @Input() email: string = 'john.doe@example.com';
  @Input() isOnline: boolean = true;
}
