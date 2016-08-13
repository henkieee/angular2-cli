import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
  	this.todos = [{
  		text: "Paspoort verlengen"
  	}, 
  	{
  		text: "Eten maken"
  	},
  	{
  		text: "Telefoon opladen"
  	}];
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
