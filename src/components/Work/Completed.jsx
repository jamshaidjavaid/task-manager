import React from "react";
import TodoList from "./TodoList";

const Completed = () => {
  return (
    <div className="task-board">
      Completed
      <div
        className="board-container"
        style={{
          backgroundColor: "rgba(185,131,255, 0.034)",
          borderColor: "rgb(185,131,255)",
        }}
      >
        {" "}
        <TodoList tasks={[]} />
      </div>
    </div>
  );
};

export default Completed;
