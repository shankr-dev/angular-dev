import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../../assets/dummy-data/dummy-user';
import { UserComponent } from './user/user';
import { User } from '../model/user.model';

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
