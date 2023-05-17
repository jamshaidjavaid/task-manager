import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Modal, Form, Input } from "antd";

import TodoListContainer from "../components/Work/TodoListContainer";

import "../styles/Work.scss";

const DUMMY_TASKS = [
  {
    id: 0,
    heading: "My Special Task",
    description: "My special task should be done before 10AM tommorrow.",
    currentList: "todoTasks",
    time: "17/05/2023 11:45:04 PM",
  },
  {
    id: 1,
    heading: "Cleaning Laptop",
    description:
      "Laptop should be cleaned as early as possible and not late then 6pm today.",
    currentList: "inProgressTasks",
    time: "17/05/2023 11:45:04 PM",
  },
  {
    id: 2,
    heading: "Another task",
    description: "I wrote another task for you.",
    currentList: "inReviewTasks",
    time: "17/05/2023 11:45:04 PM",
  },
  {
    id: 3,
    heading: "Completed task",
    description: "Maintained github commit streak for 15 days",
    currentList: "completedTasks",
    time: "17/05/2023 11:45:04 PM",
  },
];

const Work = () => {
  const [todos, setTodos] = useState([...DUMMY_TASKS]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [query, setQuery] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [form] = Form.useForm();

  const listNames = [
    "todoTasks",
    "inProgressTasks",
    "inReviewTasks",
    "completedTasks",
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  function format(inputDate) {
    let date, month, year;

    const time = inputDate.toLocaleTimeString();

    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();

    date = date.toString().padStart(2, "0");

    month = month.toString().padStart(2, "0");

    return `${date}/${month}/${year}  ${time}`;
  }

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingTask) {
        const updatedTodo = { ...editingTask, ...values };
        setTodos(
          todos.map((task) => (task.id === editingTask.id ? updatedTodo : task))
        );
        setEditingTask(null);
      } else {
        const newTodo = {
          id: todos.length,
          heading: values.heading,
          description: values.description,
          currentList: "todoTasks",
          time: format(new Date()),
        };
        setTodos([...todos, newTodo]);
      }
      setIsModalVisible(false);
      form.resetFields();
      setQuery("");
    });
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
    setQuery("");
  };

  const editTask = (task) => {
    setEditingTask(task);
    form.setFieldsValue(task);
    showModal();
  };

  const changeListHandler = (key, task) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((t) => {
        if (t.id === task.id) {
          return { ...t, currentList: listNames[Number(key) - 1] };
        }
        return t;
      });
      return updatedTodos;
    });
  };

  const searchHandler = () => {
    setQuery(searchedText);
  };

  return (
    <div>
      <div className="page-top">
        <button onClick={showModal}>Add a Task</button>
        <div className="search">
          <input
            type="text"
            placeholder="Search tasks by name"
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <Icon
            icon="material-symbols:search"
            width="26"
            height="26"
            color="#62aafd"
            className="search-icon"
            onClick={searchHandler}
          />
        </div>
      </div>
      <div className="work-container">
        <TodoListContainer
          tasks={todos
            .filter((task) => task.currentList === "todoTasks")
            .filter((task) =>
              task.heading.toLowerCase().includes(query.toLowerCase())
            )}
          name="To Do"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="todo-task"
          onChangeList={changeListHandler}
        ></TodoListContainer>
        <TodoListContainer
          className="in-progress-container"
          tasks={todos
            .filter((task) => task.currentList === "inProgressTasks")
            .filter((task) =>
              task.heading.toLowerCase().includes(query.toLowerCase())
            )}
          name="In Progress"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="in-progress-task"
          onChangeList={changeListHandler}
        />
        <TodoListContainer
          className="in-review-container"
          tasks={todos
            .filter((task) => task.currentList === "inReviewTasks")
            .filter((task) =>
              task.heading.toLowerCase().includes(query.toLowerCase())
            )}
          name="In Review"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="in-review-task"
          onChangeList={changeListHandler}
        />
        <TodoListContainer
          className="completed-container"
          tasks={todos
            .filter((task) => task.currentList === "completedTasks")
            .filter((task) =>
              task.heading.toLowerCase().includes(query.toLowerCase())
            )}
          name="Completed"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="completed-task"
          onChangeList={changeListHandler}
        />
        <Modal
          title={editingTask ? "Edit Task" : "Add a Task"}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={() => setIsModalVisible(false)}
          className="task-modal"
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="Task Name"
              name="heading"
              rules={[
                { required: true, message: "Please enter a task name" },
                {
                  max: 50,
                  message: "Task name cannot be longer than 50 characters",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter a task description" },
                {
                  max: 200,
                  message: "Description cannot be longer than 200 characters",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Work;
