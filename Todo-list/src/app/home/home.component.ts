import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';// This import is necessary for the ngFor directive to work
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newTodo: string="";
  todos: string[]=[];


  addTodo() {
    if (this.newTodo.trim() && this.newTodo!=="Archange") {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
  
      
    }
    console.log(this.todos);
  }

  delete(index:number){
    this.todos.splice(index, 1);
  }

  showList(){
    var temp=this.newTodo;
    if(temp=="Archange"){
      this.newTodo="";
      return true;
    }
    return false;
  }

  isListEmpty(){
    return this.todos.length===0;
  }
  resetTodo(){
    this.newTodo="";
}
}

