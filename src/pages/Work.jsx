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
  },
  {
    id: 1,
    heading: "Cleaning Laptop",
    description:
      "Laptop should be cleaned as early as possible and not late then 6pm today.",
    currentList: "inProgressTasks",
  },
  {
    id: 2,
    heading: "Another task",
    description: "I wrote another task for you.",
    currentList: "inReviewTasks",
  },
  {
    id: 3,
    heading: "Completed task",
    description: "Maintained github commit streak for 15 days",
    currentList: "completedTasks",
  },
];

const Work = () => {
  const [todos, setTodos] = useState([...DUMMY_TASKS]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

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
        };
        setTodos([...todos, newTodo]);
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
    form.setFieldsValue(task);
    showModal();
  };

  const todoTasks = todos.filter((task) => task.currentList === "todoTasks");
  const inProgressTasks = todos.filter(
    (task) => task.currentList === "inProgressTasks"
  );
  const inReviewTasks = todos.filter(
    (task) => task.currentList === "inReviewTasks"
  );
  const CompletedTasks = todos.filter(
    (task) => task.currentList === "completedTasks"
  );

  return (
    <div>
      <div className="page-top">
        <button onClick={showModal}>Add a Task</button>
        <div className="search">
          <input
            type="text"
            placeholder="Search tasks by name"
            // value={searchedText}
            // onChange={(e) => setSearchedText(e.target.value)}
          />
          <Icon
            icon="material-symbols:search"
            width="26"
            height="26"
            color="#62aafd"
            className="search-icon"
            // onClick={searchHandler}
          />
        </div>
      </div>
      <div className="work-container">
        <TodoListContainer
          tasks={todoTasks}
          name="To Do"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="todo-task"
        ></TodoListContainer>

        <TodoListContainer
          className="in-progress-container"
          tasks={inProgressTasks}
          name="In Progress"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="in-progress-task"
        />
        <TodoListContainer
          className="in-review-container"
          tasks={inReviewTasks}
          name="In Review"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="in-review-task"
        />
        <TodoListContainer
          className="completed-container"
          tasks={CompletedTasks}
          name="Completed"
          onDelete={deleteTask}
          onEdit={editTask}
          taskClassName="completed-task"
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
