import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { type Task } from '../../../model/task.model';
import { type User } from '../../../model/user.model';
import { TasksComponent } from './tasks/tasks';
import { TaskService } from '../../../service/TaskService';
import { AddTaskComponent } from '../add-task/add-task';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.html',
  standalone: true,
  imports: [CommonModule, TasksComponent, AddTaskComponent],
})
export class RightSidebarComponent {
  @Input() selectedUser?: User;
  showAddTask: boolean = false;

  constructor(private taskService: TaskService) {}

  get user() {
    return this.selectedUser;
  }

  get userTasks(): Task[] {
    return this.taskService.getTasksByUserId(this.selectedUser?.id);
  }

  openAddTaskModal(): void {
    this.showAddTask = true;
  }

  closeAddTaskModal(): void {
    this.showAddTask = false;
  }

  onTaskAdded(taskForm: any): void {
    const newTask: Task = {
      id: Date.now(), // Generate unique ID
      userId: this.selectedUser?.id || 0,
      title: taskForm.title,
      description: taskForm.description,
      work: taskForm.work,
      priority: taskForm.priority,
      dueDate: taskForm.dueDate,
      estimatedHours: taskForm.estimatedHours,
      isCompleted: taskForm.isCompleted || false
    };
    
    this.taskService.addTask(newTask);
  }
}
