import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  handleTodoCheck({ id, done }: Todo) {
    const call = done
      ? this.todoService.undoTodo(id)
      : this.todoService.doneTodo(id);
    call.subscribe(() => {
      this.todos = this.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !done };
        }
        return t;
      });
    });
  }

  handleTodoDelete({ id }: Todo) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }
}
