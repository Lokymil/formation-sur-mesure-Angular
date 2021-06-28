import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass'],
})
export class TodoFormComponent implements OnInit {
  todo = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });
  id: Number = 0;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params?.id || 0;
      if (this.id) {
        this.todoService
          .getTodo(this.id)
          .subscribe(({ title }) => this.todo.setValue({ title }));
      }
    });
  }

  get title() {
    return this.todo.get('title');
  }

  onSubmit() {
    const call = this.id
      ? this.todoService.updateTodo(this.id, this.todo.value)
      : this.todoService.createTodo(this.todo.value);

    call.subscribe(() => this.router.navigateByUrl('/'));
  }
}
