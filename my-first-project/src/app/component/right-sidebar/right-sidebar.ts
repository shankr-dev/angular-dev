import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { type Task } from '../../../model/task.model';
import { type User } from '../../../model/user.model';
import { TasksComponent } from './tasks/tasks';
import { TaskService } from '../../../service/TaskService';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.html',
  standalone: true,
  imports: [CommonModule, TasksComponent],
})
export class RightSidebarComponent {
  @Input() selectedUser?: User;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}


  get user() {
    return this.selectedUser;
  }

  get userTasks(): Task[] {
    return this.taskService.getTasksByUserId(this.selectedUser?.id)
  }
}
