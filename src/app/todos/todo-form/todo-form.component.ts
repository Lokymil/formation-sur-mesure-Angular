import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass'],
})
export class TodoFormComponent implements OnInit {
  todo = new FormGroup({
    title: new FormControl(''),
  });

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.todoService
      .createTodo(this.todo.value)
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}
