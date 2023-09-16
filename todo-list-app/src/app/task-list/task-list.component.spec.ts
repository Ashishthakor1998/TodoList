import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should edit a task', () => {
    const taskToEdit = component.tasks[0];
    component.editTask(taskToEdit);
    component.editingTask.title = 'Edited Task';
    component.saveEditedTask();
    expect(taskToEdit.title).toBe('Edited Task');
  });

  it('should cancel editing a task', () => {
    const taskToEdit = component.tasks[0];
    component.editTask(taskToEdit);
    component.editingTask.title = 'Edited Task';
    component.cancelEdit();
    expect(taskToEdit.title).not.toBe('Edited Task');
  });

  it('should complete a task', () => {
    const taskToComplete = component.tasks[0];
    component.completeTask(taskToComplete);
    expect(taskToComplete.completed).toBe(true);
  });

});
