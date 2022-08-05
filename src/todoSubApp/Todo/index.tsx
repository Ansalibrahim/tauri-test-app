import { ReactElement, useState } from "react";
import { TaskItem } from "../types";
import "./index.css";

function Todo({
  todo,
  remove,
  update,
  toggleComplete,
}: {
  todo: TaskItem;
  remove: (id: string) => void;
  update: (id: string, task: string) => void;
  toggleComplete: (id: string) => void;
}): ReactElement {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (evt: any) => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (evt: any) => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (evt: any) => {
    setTask(evt.target.value);
  };
  const toggleCompleted = (evt: any) => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleClick}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
