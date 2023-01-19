import { STATUS } from "../enums/status";
import { TodoStructure } from "../models/todoStructure";
import { TodoList } from "./todoList";

class AppState {
  protected todos: TodoStructure[];
  private static instance: AppState;

  protected constructor() {
    this.todos = [];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AppState();
    return this.instance;
  }

  protected getTodoList() {
    new TodoList(this.todos, "Pending");
    new TodoList(this.todos, "Finished");
  }

  addTodo(id: string, input: string, status: STATUS) {
    const todoItem = new TodoStructure(id, input, status);
    this.todos.push(todoItem);
    //console.log(this.todos);
    this.getTodoList();
  }

  set Todos(todoItems: TodoStructure[]) {
    this.todos = [...todoItems];
    this.getTodoList();
  }

  get Todos() {
    return this.todos;
  }
}

export const appState = AppState.getInstance();
