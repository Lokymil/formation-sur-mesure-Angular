import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [TodoListComponent, TodoItemComponent, TodoFormComponent],
})
export class TodosModule {}
