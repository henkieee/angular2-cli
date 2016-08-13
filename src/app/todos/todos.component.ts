import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
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

}
