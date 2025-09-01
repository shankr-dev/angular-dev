import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task';
import { User } from '../user/user';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.html',
  standalone: true,
  imports: [CommonModule, TaskComponent],
})
export class RightSidebarComponent {
  @Input() selectedUser?: User;

  get user() {
    return this.selectedUser;
  }
}
