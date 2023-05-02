import React from "react";
import { Icon } from "@iconify/react";

import "../../styles/components/Work/TodoList.scss";

const TodoList = ({ tasks }) => {
  return (
    <div className="todo-list">
      <div className="task-add-button">
        <Icon
          icon="material-symbols:add-circle-outline-rounded"
          color="#0d0d11"
          width="15"
          height="15"
        />
      </div>
      <div className="tasks">
        {tasks?.map((task, index) => {
          return (
            <div key={task.id} className="task-container">
              <div className="task-head">
                <h5>{task.heading}</h5>
                <div className="task-icons">
                  <Icon
                    className="icon-button"
                    icon="tabler:edit"
                    color="#0d0d11"
                    width="15"
                    height="15"
                  />
                  <Icon
                    className="icon-button"
                    icon="mingcute:delete-2-line"
                    color="#0d0d11"
                    width="15"
                    height="15"
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
