import React from "react";
import TodoItem from "./TodoItem";

interface Props {}

interface TodoItemState {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  input: string;
  todoItems: TodoItemState[];
}

class TodoList extends React.Component<Props, State> {
  nextTodoId: number = 0;

  state: State = {
    input: "",
    todoItems: []
  };
  onToggle = (id: number): void => {
    const { todoItems } = this.state;
    const nextTodoItems: TodoItemState[] = todoItems.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({
      todoItems: nextTodoItems
    });
  };
  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { todoItems, input } = this.state;
    const newItem: TodoItemState = {
      id: this.nextTodoId++,
      text: input,
      done: false
    };
    const nextTodoItems: TodoItemState[] = todoItems.concat(newItem);
    this.setState({
      input: "",
      todoItems: nextTodoItems
    });
  };

  onRemove = (id: number): void => {
    const { todoItems } = this.state;
  };
}
