import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: Task = new Task();
  editingTask: any;
  originalEditingTaskTitle!: string; // Store the original task title
  
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTask.title.trim() !== '') {
      this.taskService.addTask({ ...this.newTask, id: Date.now() });
      this.newTask = new Task();
    }
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
  }

  editTask(task: Task): void {
    this.editingTask = task;
    this.originalEditingTaskTitle = task.title; // Store original title
  }

  saveEditedTask() {
    if (this.editingTask) {
      this.editingTask.title = this.editingTask.title.trim();
      this.editingTask = null;
    }
  }

  cancelEdit() {
    this.editingTask.title = this.originalEditingTaskTitle; // Revert to the original title
    this.originalEditingTaskTitle = ''; // Clear original title
    this.editingTask = null;
  }

  completeTask(task: Task) {
    this.taskService.completeTask(task);
  }
}
