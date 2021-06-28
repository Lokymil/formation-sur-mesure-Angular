import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  test: String = 'WUT !';
  constructor(private todoService: TodoService) {
    this.todos = [{ id: 1, title: 'Wut !', done: false }];
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((data: Todo[]) => {
      console.log(data);
      this.todos = data;
    });
  }
}
