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
}
