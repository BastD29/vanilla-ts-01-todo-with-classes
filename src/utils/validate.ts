import { TodoInputValidation } from "../interfaces/todoInputValidation";

export function validate(todo: TodoInputValidation) {
  let isValid = true;
  if (todo.min && todo.text.length < todo.min) {
    isValid = false;
  }
  return isValid;
}
