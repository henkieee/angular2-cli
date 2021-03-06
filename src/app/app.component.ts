import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent, TodosComponent],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app works!';
  name = 'Henk!!';

  greet()
  {
     return 'Hello ' + this.name;
  }
}
