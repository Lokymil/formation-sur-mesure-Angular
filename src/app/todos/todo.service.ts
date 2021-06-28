import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080';

  getAllTodos() {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
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

  createTodo(title: String) {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, { title });
  }
}
