import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../dummy-user';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: true,
  imports: [],
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<User>();

  onUserCLick = () => {
    this.select.emit(this.user);
  };
}
