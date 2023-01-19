import { TodoStructure } from "../models/todoStructure";
import { TodoItem } from "./todoItem";

export class TodoList {
  constructor(
    private todoItems: TodoStructure[],
    private type: "Pending" | "Finished"
  ) {
    this.display();
    console.log(this.type);
  }

  private display() {
    //console.log(this.todoItems);

    document.querySelector("ul")!.innerText = "";

    //console.log(this.assignedTodo);

    for (let todo of this.todoItems) {
      //console.log(todo);
      new TodoItem(todo.id, todo.input, this.todoItems);
    }
  }
}
