import { useState } from "react";
import Todo from "../Todo";
import NewTodoForm from "../NewTodo";
import { v4 as uuid } from "uuid";
import "./index.css";
import { TaskItem } from "../types";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), task: "task 1", completed: false },
    { id: uuid(), task: "task 2", completed: true },
  ]);

  const create = (newTodo: TaskItem) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id: string, updtedTask: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            toggleComplete={toggleComplete}
            update={update}
            remove={remove}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
      <NewTodoForm createTodo={create} />
    </div>
  );
}

export default TodoList;
