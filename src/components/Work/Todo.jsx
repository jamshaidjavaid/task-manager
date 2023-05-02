import React from "react";
import TodoList from "./TodoList";

const DUMMY_TASKS = [
  {
    id: 1,
    heading: "My Special Task",
    description: "My special task should be done before 10AM tommorrow.",
  },
  {
    id: 2,
    heading: "My Special Task",
    description: "My special task should be done before 10AM tommorrow.",
  },
];

const Todo = () => {
  return (
    <div className="task-board">
      To Do
      <div className="board-container">
        <TodoList tasks={DUMMY_TASKS} />
      </div>
    </div>
  );
};

export default Todo;
