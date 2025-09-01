import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { User, UserComponent } from '../user/user';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.html',
  standalone: true,
  imports: [CommonModule, UserComponent],
})
export class LeftSidebarComponent {
  users = DUMMY_USERS;

  @Output() userSelected = new EventEmitter<User>();

  onClickUser = (user: User) => {
    console.log(`User selected: ${user.id}`);
    this.userSelected.emit(user);
  };
}
