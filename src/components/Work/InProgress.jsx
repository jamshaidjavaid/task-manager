import React from "react";
import TodoList from "./TodoList";

const InProgress = () => {
  return (
    <div className="task-board">
      In Progress
      <div
        className="board-container"
        style={{
          backgroundColor: "rgba(255,149,197, 0.034)",
          borderColor: "rgb(255,149,197)",
        }}
      >
        <TodoList tasks={[]} />
      </div>
    </div>
  );
};

export default InProgress;
