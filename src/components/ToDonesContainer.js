import React, { Component } from "react";
import ToDonesItem from "./ToDonesItem";

export default class ToDonesContainer extends Component {
  render() {
    return (
      <div className="todones-container">
        <h3>BACKLOG</h3>
        {this.props.todones.map((todone) => {
          return (
            <ToDonesItem
              key={todone.id}
              todone={todone}
              updateTask={this.props.updateTask}
              deleteTask={this.props.deleteTask}
            />
          );
        })}
      </div>
    );
  }
}
