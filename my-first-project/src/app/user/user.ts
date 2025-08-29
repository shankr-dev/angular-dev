import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: true,
  imports: []
})
export class UserComponent {
  // @Input({required: true}) name!: string;
  // @Input({required: true}) email!: string;
  // @Input({required: true}) isOnline: boolean = false;

  name = input.required<string>();
  email = input.required<string>();
  isOnline = input.required<boolean>();
}
