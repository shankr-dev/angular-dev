import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { UserComponent } from '../user/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  imports: [CommonModule, UserComponent],
})
export class SidebarComponent {
  user = DUMMY_USERS;

  @Output() userSelected = new EventEmitter<number>();

  onClickUser = (id: number) => {
    console.log(`User selected: ${id}`);
    this.userSelected.emit(id);
  };
}
