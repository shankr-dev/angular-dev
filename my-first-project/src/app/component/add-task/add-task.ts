import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AddTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() taskAdded = new EventEmitter<any>();

  taskForm = {
    work: '',
    priority: 'Medium',
    title: '',
    description: '',
    dueDate: '',
    estimatedHours: 1,
    isCompleted: false,
  };

  priorities = ['Low', 'Medium', 'High'];

  onSubmit() {
    // TODO: Implement task addition logic
    this.taskAdded.emit(this.taskForm);
    this.resetForm();
    this.closeModal.emit();
  }

  onCancel() {
    this.resetForm();
    this.closeModal.emit();
  }

  private resetForm() {
    this.taskForm = {
      title: '',
      description: '',
      work: '',
      priority: 'Medium',
      dueDate: '',
      estimatedHours: 1,
      isCompleted: false,
    };
  }
}
