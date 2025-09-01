import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../../assets/dummy-data/dummy-tasks';
import { TasksComponent } from './tasks/tasks';
import { Task } from '../model/task.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.html',
  standalone: true,
  imports: [CommonModule, TasksComponent],
})
export class RightSidebarComponent {
  @Input() selectedUser?: User;

  get user() {
    return this.selectedUser;
  }

  get userTasks(): Task[] {
    return DUMMY_TASKS.filter((task: Task) => task.userId === this.selectedUser?.id);
  }

  get totalTasks(): number {
    return this.userTasks.length;
  }

  get completedTasks(): number {
    return this.userTasks.filter((task) => task.isCompleted).length;
  }

  get pendingTasks(): number {
    return this.userTasks.filter((task) => !task.isCompleted).length;
  }
}
