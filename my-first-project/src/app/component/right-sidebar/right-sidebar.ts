import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { type Task } from '../../../model/task.model';
import { type User } from '../../../model/user.model';
import { TaskService } from '../../../service/TaskService';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.html',
  standalone: true,
  imports: [CommonModule, TasksComponent],
})
export class RightSidebarComponent implements OnInit, OnDestroy {
  @Input() selectedUser?: User;
  tasks: Task[] = [];
  taskFilter: 'completed' | 'pending' = 'pending';
  private taskSubscription?: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.subscribeToTasks();
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }

  private subscribeToTasks() {
    if (this.selectedUser) {
      this.taskSubscription = this.taskService
        .getTasksByUserId(this.selectedUser.id)
        .subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
    }
  }

  get user() {
    return this.selectedUser;
  }

  setTaskFilter(filter: 'completed' | 'pending') {
    this.taskFilter = filter;
  }

  get userTasks(): Task[] {
    switch (this.taskFilter) {
      case 'completed':
        return this.tasks.filter((task) => task.isCompleted);
      case 'pending':
        return this.tasks.filter((task) => !task.isCompleted);
      default:
        return this.tasks;
    }
  }

  get completedTasks(): number {
    return this.tasks.filter((task) => task.isCompleted).length;
  }

  get pendingTasks(): number {
    return this.tasks.filter((task) => !task.isCompleted).length;
  }
}
