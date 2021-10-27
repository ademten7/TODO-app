import "./css/App.scss";
import { v4 as uuid } from "uuid";

import React, { Component } from "react";
import Navigation from "./components/Navigation";
import ToDosContainer from "./components/ToDosContainer";
import ToDonesContainer from "./components/ToDonesContainer";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";

export default class App extends Component {
  state = {
    todoList: [],
    // page: "home",
  };

  // switchPageToHome = () => {
  //   this.setState({ page: "home" });
  // };
  // switchPageToAbout = () => {
  //   this.setState({ page: "about" });
  // };

  addTask = (todotext) => {
    let task = { id: uuid(), text: todotext, done: false };
    this.setState({ todoList: [...this.state.todoList, task] });
  };

  updateTask = (id) => {
    let updatedItems = this.state.todoList.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ todoList: updatedItems });
  };

  deleteTask = (id) => {
    let newTodoList = this.state.todoList.filter((item) => item.id !== id);
    this.setState({ todoList: newTodoList });
  };

  render() {
    let todos = this.state.todoList.filter((item) => !item.done);
    let todones = this.state.todoList.filter((item) => item.done);
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />

          {/* // switchPageToHome={this.switchPageToHome}
            // switchPageToAbout={this.switchPageToAbout} */}
          <Switch>
            <Route exact path="/">
              {/* {this.state.page === "home" ? ( */}
              <div>
                <ToDosContainer
                  todos={todos}
                  addTask={this.addTask}
                  updateTask={this.updateTask}
                />
                <ToDonesContainer
                  todones={todones}
                  updateTask={this.updateTask}
                  deleteTask={this.deleteTask}
                />
              </div>
            </Route>
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//TODO
//lifting up state
// change functional component into class component
// make input a controlled component by using onChange
//store input value into state
//onSubmit ,we add our todo item into our todos list
//on clicking finsih button ,we add our todo item from todolist to todonelist (done:true)

//props drilling
