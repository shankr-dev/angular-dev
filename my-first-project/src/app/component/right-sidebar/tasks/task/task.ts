import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../../../../../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  standalone: true,
  imports: [CommonModule],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskComplete = new EventEmitter<Task>();
  @Output() taskCancel = new EventEmitter<Task>();

  completeTask(): void {
    this.taskComplete.emit(this.task);
  }

  cancelTask(): void {
    this.taskCancel.emit(this.task);
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Medium':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Low':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  }

  getPriorityIcon(priority: string): string {
    switch (priority) {
      case 'High':
        return 'bg-emerald-50 border-emerald-100';
      case 'Medium':
        return 'bg-orange-50 border-orange-100';
      case 'Low':
        return 'bg-gray-100 border-gray-200';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  }

  getPriorityIconColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'text-emerald-600';
      case 'Medium':
        return 'text-orange-600';
      case 'Low':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  }

  getStatusIcon(): string {
    return this.task.isCompleted
      ? 'bg-emerald-50 border-emerald-100'
      : 'bg-gray-100 border-gray-200';
  }

  getStatusIconColor(): string {
    return this.task.isCompleted ? 'text-emerald-600' : 'text-gray-600';
  }

  getStatusIconPath(): string {
    if (this.task.isCompleted) {
      return 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z';
    } else {
      return 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z';
    }
  }
}
