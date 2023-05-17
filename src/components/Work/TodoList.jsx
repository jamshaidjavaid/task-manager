import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Icon } from "@iconify/react";

import "../../styles/components/Work/TodoList.scss";

const TodoList = ({ tasks, onDelete, onEdit, taskClassName, onChangeList }) => {
  const deleteHandler = (id) => {
    onDelete(id);
  };

  const editHandler = (task) => {
    onEdit(task);
  };

  const clickHandler = (key, task) => {
    onChangeList(key, task);
  };

  const items = [
    {
      key: "1",
      label: "To Do",
    },
    {
      key: "2",
      label: "In Progress",
    },
    {
      key: "3",
      label: "In Review",
    },
    {
      key: "4",
      label: "Completed",
    },
  ];

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
              <hr />
              <div className="task-footer">
                <p className="task-time">{task.time}</p>
                <Dropdown
                  trigger="click"
                  menu={{
                    items,
                    selectable: true,
                    onClick: ({ key }) => {
                      clickHandler(key, task);
                    },
                  }}
                  placement="bottom"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Add to
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
