import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newTodo: string="";
  todos: string[]=[];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }
}


