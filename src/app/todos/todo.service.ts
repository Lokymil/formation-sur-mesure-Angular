import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormTodo } from './model/form-todo';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080';

  getAllTodos() {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  getTodo(id: Number) {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  doneTodo(id: Number) {
    return this.http.post(`${this.baseUrl}/todos/${id}/done`, {});
  }

  undoTodo(id: Number) {
    return this.http.post(`${this.baseUrl}/todos/${id}/undo`, {});
  }

  deleteTodo(id: Number) {
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }

  createTodo(todo: FormTodo) {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, todo);
  }

  updateTodo(id: Number, todo: FormTodo) {
    return this.http.put<Todo>(`${this.baseUrl}/todos/${id}`, todo);
  }
}
