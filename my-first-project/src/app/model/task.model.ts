export interface Task {
  id: number;
  userId: number;
  work: string;
  priority: 'High' | 'Medium' | 'Low';
  title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;
  isCompleted: boolean;
}
