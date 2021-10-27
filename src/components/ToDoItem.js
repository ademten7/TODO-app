import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <p>{this.props.todo.text}</p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.props.updateTask(this.props.todo.id)}
          >
            &#10004;
          </button>
        </div>
      </div>
    );
  }
}
