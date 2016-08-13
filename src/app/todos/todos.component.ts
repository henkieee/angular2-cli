import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  	this.todos = this._todoService.getTodos();
  }

  addTodo() 
  {
  	this.todos.push({
  		text: this.text
  	});
  	this.text = "";
  }
  deleteTodo(todoText)
  {
     this.todos = this.todos
     				.filter(item => item.text !== todoText);
  }

}
