import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../../../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: true,
  imports: [],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input() isSelected: boolean = false;

  @Output() select = new EventEmitter<User>();

  onUserCLick = () => {
    this.select.emit(this.user);
  };
}
