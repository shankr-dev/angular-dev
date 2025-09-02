import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { type Task } from '../../model/task.model';
import { type User } from '../../model/user.model';
import { TaskComponent } from './task/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  standalone: true,
  imports: [CommonModule, TaskComponent],
})
export class TasksComponent {
  @Input() userTasks?: Task[];
  @Input() selectedUser?: User;

  get tasks() {
    return this.userTasks;
  }
}
