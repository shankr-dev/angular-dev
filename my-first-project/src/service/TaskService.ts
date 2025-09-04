import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../assets/dummy-data/dummy-tasks';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = DUMMY_TASKS;

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(taskId: number): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  getTasksByUserId(userId: number | undefined): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTaskStatus(taskId: number, isCompleted: boolean): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        isCompleted: isCompleted,
      };
    }
  }
}
