import React from "react";
import TodoList from "./TodoList";

const InReview = () => {
  return (
    <div className="task-board">
      In Review
      <div
        className="board-container"
        style={{
          backgroundColor: "rgba(98,170,224, 0.034)",
          borderColor: "rgb(98,170,224)",
        }}
      >
        <TodoList tasks={[]} />
      </div>
    </div>
  );
};

export default InReview;
