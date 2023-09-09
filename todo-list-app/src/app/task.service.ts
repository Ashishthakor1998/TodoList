import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    deleteTask(task: Task): void {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    editTask(task: Task, newTitle: string): void {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks[index].title = newTitle;
        }
    }

    completeTask(task: Task): void {
        task.completed = true;
    }
}
