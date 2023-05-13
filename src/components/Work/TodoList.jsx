import React from "react";
import { Icon } from "@iconify/react";

import "../../styles/components/Work/TodoList.scss";

const TodoList = ({ tasks, onDelete, onEdit, taskClassName }) => {
  const deleteHandler = (id) => {
    onDelete(id);
  };

  const editHandler = (task) => {
    onEdit(task);
  };

  return (
    <div className="todo-list">
      <div className="tasks">
        {!tasks.length && <p>No tasks</p>}
        {tasks?.map((task, index) => {
          return (
            <div key={task.id} className={`task-container ${taskClassName}`}>
              <div className="task-head">
                <h5>{task.heading}</h5>
                <div className="task-icons">
                  <Icon
                    className="icon-button"
                    icon="tabler:edit"
                    color="#0d0d11"
                    width="15"
                    height="15"
                    onClick={() => {
                      editHandler(task);
                    }}
                  />
                  <Icon
                    className="icon-button"
                    icon="mingcute:delete-2-line"
                    color="#0d0d11"
                    width="15"
                    height="15"
                    onClick={() => {
                      deleteHandler(task.id);
                    }}
                  />
                </div>
              </div>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
