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
        fixture.detectChanges();
    });

    it('should add a new task', () => {
        const initialTaskCount = component.tasks.length;
        component.newTask.title = 'New Task';
        component.addTask();
        expect(component.tasks.length).toBe(initialTaskCount + 1);
        expect(component.tasks[initialTaskCount].title).toBe('New Task');
    });

    it('should delete a task', () => {
        component.newTask.title = 'Task to Delete';
        component.addTask();

        const taskToDelete = component.tasks[0];
        const initialTaskCount = component.tasks.length;
        component.deleteTask(taskToDelete);
        expect(component.tasks.length).toBe(initialTaskCount - 1);
        expect(component.tasks.indexOf(taskToDelete)).toBe(-1);
    });
});
