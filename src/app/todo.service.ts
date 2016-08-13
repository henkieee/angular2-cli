import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() { 
  	super();
  	console.log('testing service!!');
  	this.load();
  }

  getTodos()
  {
  	return JSON.parse(localStorage.getItem('todos'));
  }

}
