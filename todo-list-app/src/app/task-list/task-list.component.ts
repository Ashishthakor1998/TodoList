import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: Task = new Task();
  editingTask: any;

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
  }

  saveEditedTask() {
    if (this.editingTask) {
      this.editingTask.title = this.editingTask.title.trim();
      this.editingTask = null;
    }
  }

  cancelEdit() {
    this.editingTask = null;
  }

  completeTask(task: Task) {
    this.taskService.completeTask(task);
  }
}
