import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { TaskComponent } from '../task/task';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.html',
  standalone: true,
  imports: [CommonModule, TaskComponent],
})
export class RightSidebarComponent {
  @Input() selectedUserId: number | null = null;

  get user() {
    if (
      this.selectedUserId !== null &&
      this.selectedUserId >= 0 &&
      this.selectedUserId < DUMMY_USERS.length
    ) {
      return DUMMY_USERS[this.selectedUserId];
    }
    return null;
  }
}
