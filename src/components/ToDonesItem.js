import React, { Component } from "react";

export default class ToDonesItem extends Component {
  render() {
    return (
      <div className="todones-item">
        <p>{this.props.todone.text}</p>
        <div>
          <button
            className="btn"
            onClick={() => this.props.updateTask(this.props.todone.id)}
          >
            &#8635;
          </button>
          <button
            className="btn"
            onClick={() => this.props.deleteTask(this.props.todone.id)}
          >
            &#9746;
          </button>
        </div>
      </div>
    );
  }
}
