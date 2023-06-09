import { makeAutoObservable } from "mobx";
export interface TodoInterface {
  id: number;
  title: string;
  completed: boolean;
}
class Todo {
  TodoArr: TodoInterface[] = [
    { id: 1, title: "Купить корм котику", completed: false },
    { id: 2, title: "Записаться к врачу", completed: false },
    { id: 3, title: "Поставить стирку", completed: false },
    { id: 4, title: "Забрать заказ с OZON", completed: false },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo: TodoInterface) {
    this.TodoArr.push(todo);
  }
  deleteTodo(id: number) {
    this.TodoArr = this.TodoArr.filter((todo) => todo.id !== id);
  }
  doneTodo(id: number) {
    this.TodoArr = this.TodoArr.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
  }
  sortTodo(todo: TodoInterface[]) {
    this.TodoArr = todo.sort((a, b) => +a.completed - +b.completed);
  }
  updateTodo(id: number, updatedTitle: string) {
    this.TodoArr[id - 1].title = updatedTitle;
  }
}
export default new Todo();
