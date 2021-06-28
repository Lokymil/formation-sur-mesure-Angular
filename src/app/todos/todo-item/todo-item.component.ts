import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;

  @Output()
  checkTodoEvent = new EventEmitter<Todo>();
  checkTodo() {
    this.checkTodoEvent.emit(this.todo);
  }

  @Output()
  deleteTodoEvent = new EventEmitter<Todo>();
  deleteTodo() {
    this.deleteTodoEvent.emit(this.todo);
  }
}
