import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDos extends Component {
  state = {
    inputValue: "",
  };
  getInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  addNewTask = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim() !== "") {
      this.props.addTask(this.state.inputValue);
      this.setState({ inputValue: "" });
    } else {
      alert("please enter a task");
    }
  };

  render() {
    return (
      <div className="todos-container">
        <form onSubmit={this.addNewTask} className="todo-form">
          <label className="input-item">
            <input
              onChange={this.getInputValue}
              value={this.state.inputValue}
              type="text"
              name="todo"
            />
          </label>
          <input type="submit" className="btn" value="ADD" />
        </form>
        <div className="todos">
          <h3>To Do</h3>
          {this.props.todos.map((todo) => {
            return (
              <ToDoItem
                key={todo.id}
                todo={todo}
                updateTask={this.props.updateTask}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
