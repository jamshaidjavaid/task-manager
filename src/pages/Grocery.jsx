import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Modal, Form, Input } from "antd";
import "../styles/Pages.scss";

const Grocery = () => {
  // initialize state for the todos and search query
  const [todos, setTodos] = useState([
    {
      id: 1,
      heading: "Online Shopping",
      description: "Monthly online grocery shopping by the coming sunday.",
      isOpen: false,
      isCompleted: false,
    },
    {
      id: 2,
      heading: "Make a grocery list",
      description: "Grocery list should be made for the online shopping",
      isOpen: false,
      isCompleted: true,
    },
  ]);
  const [query, setQuery] = useState("");
  const [searchedText, setSearchedText] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newTodo = {
        id: todos.length + 1,
        heading: values.heading,
        description: values.description,
        isOpen: false,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const searchHandler = () => {
    setQuery(searchedText);
  };

  // function to toggle the isCompleted property of a todo
  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // function to toggle the isOpen property of a todo
  const toggleOpen = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isOpen: !todo.isOpen } : todo
      )
    );
  };

  // function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // function to filter the todos based on the search query
  const filteredTodos = todos.filter((todo) =>
    todo.heading.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page-todo">
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
      <div className="todos">
        {!todos.filter((todo) => todo.isCompleted !== true).length && (
          <p>Hurray, you don't have any task left. 🥳🎇</p>
        )}
        {filteredTodos.map((todo) => {
          return (
            <div key={todo.id} className="todo">
              <div className="todo-head">
                <div className="todo-heading">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => toggleCompleted(todo.id)}
                      id={`checkbox-${todo.id}`}
                    />
                  </div>
                  <h3 className={todo.isCompleted ? "completed" : ""}>
                    {todo.heading}
                  </h3>
                </div>
                <div className="todo-actions">
                  <Icon
                    icon="tabler:edit"
                    width="20"
                    height="20"
                    color="#00D48E"
                    className="todo-action"
                  />
                  <Icon
                    icon="material-symbols:delete-outline-rounded"
                    width="20"
                    height="20"
                    color="#00D48E"
                    className="todo-action"
                    onClick={() => deleteTodo(todo.id)}
                  />
                  <div
                    className="todo-arrow"
                    onClick={() => toggleOpen(todo.id)}
                    style={{
                      transform: `${
                        todo.isOpen ? "rotate(180deg) translateY(5px)" : "none"
                      }`,
                    }}
                  >
                    <Icon
                      icon="material-symbols:keyboard-arrow-down-rounded"
                      width="24"
                      height="24"
                      color="#00D48E"
                    />
                  </div>
                </div>
              </div>
              {todo.isOpen && (
                <div className="todo-description">{todo.description}</div>
              )}
            </div>
          );
        })}
      </div>
      <Modal
        title="Add a Task"
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
  );
};

export default Grocery;
