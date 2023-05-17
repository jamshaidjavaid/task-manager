import React from "react";
import TodoList from "./TodoList";

const TodoListContainer = ({
  name,
  tasks,
  className,
  onDelete,
  onEdit,
  taskClassName,
  children,
  onChangeList,
}) => {
  return (
    <div className="task-board">
      {name}
      <div className={`board-container ${className}`}>
        {children}
        <TodoList
          tasks={tasks}
          onDelete={onDelete}
          onEdit={onEdit}
          taskClassName={taskClassName}
          onChangeList={onChangeList}
        />
      </div>
    </div>
  );
};

export default React.memo(TodoListContainer);
