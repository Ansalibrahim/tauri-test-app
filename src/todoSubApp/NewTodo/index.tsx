import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskItem } from "../types";
import "./index.css";

function NewTodoForm({ createTodo }: { createTodo: (task: TaskItem) => void }) {
  const [todo, setTodo] = useState<string>("");

  const handleChange = (evt: any) => {
    setTodo(evt.target.value);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const newTodo = { id: uuidv4(), task: todo, completed: false };
    createTodo(newTodo);
    setTodo("");
  };

  console.log("todo: ", todo);

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={todo}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button disabled={todo.trim().length === 0}>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
