import { STATUS } from "./enums/status";
import { validate } from "./utils/validate";
import { appState } from "./components/appState";

class TodoInput {
  todoInput: HTMLInputElement;
  submitButton: HTMLButtonElement;
  constructor() {
    this.todoInput = document.querySelector("input")! as HTMLInputElement;
    this.submitButton = document.querySelector(
      ".addTodo"
    )! as HTMLButtonElement;
    this.submit();
  }

  private validation(value: string): string | undefined {
    const checkInput = validate({
      text: value,
      min: 3,
    });
    if (!checkInput) {
      alert("Invalid input");
      return;
    }
    return value;
  }

  private clearFormInput() {
    this.todoInput.value = "";
  }

  private submitHandler(e: Event) {
    e.preventDefault();
    console.log("event");
    const getTodoValue = this.todoInput.value;
    const ValidatedText = this.validation(getTodoValue);
    if (ValidatedText) {
      const id = Math.random().toString();
      appState.addTodo(id, ValidatedText, STATUS.Pending);
      this.clearFormInput();
    } else {
      this.clearFormInput();
    }
  }
  private submit() {
    console.log(this.submitButton, this.todoInput);
    this.submitButton.addEventListener("click", this.submitHandler.bind(this));
  }
}

const todo = new TodoInput();
