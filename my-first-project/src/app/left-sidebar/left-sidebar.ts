import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../assets/dummy-data/dummy-user';
import { type User } from '../model/user.model';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.html',
  standalone: true,
  imports: [CommonModule, UserComponent],
})
export class LeftSidebarComponent {
  users = DUMMY_USERS;

  @Input() selectedUser?: User;
  @Output() userSelected = new EventEmitter<User>();

  onClickUser = (user: User) => {
    console.log(`User selected: ${user.id}`);
    this.userSelected.emit(user);
  };
}
