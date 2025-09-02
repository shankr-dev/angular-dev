import { BehaviorSubject, Injectable, Observable } from '@angular/core';
import { DUMMY_TASKS } from '../assets/dummy-data/dummy-tasks';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = DUMMY_TASKS;
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  getTasksSnapshot(): Task[] {
    return this.tasksSubject.getValue();
  }

  getTaskById(taskId: number): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  getTasksByUserId(userId: number | undefined): Observable<Task[]> {
    return new Observable<Task[]>((observer) => {
      this.tasksSubject.subscribe((tasks) => {
        observer.next(tasks.filter((task) => task.userId === userId));
      });
    });
  }

  updateTaskStatus(taskId: number, isCompleted: boolean): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        isCompleted: isCompleted,
      };
      this.tasksSubject.next([...this.tasks]);
    }
  }
}
