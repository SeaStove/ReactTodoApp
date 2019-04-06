import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import uuid from "uuid";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  //http request lifecycle method
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  //Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //toggling so that you can uncheck
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  //use filter (higher order function)
  //... copys everything, spread operator, google this
  delTodo = id => {
    //using backticks for two params
    axios.delete(`https://jsonplaceholder.typicode.com/todos/$(id)`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  //Add Todo
  //with ES6 if key and value are the same, you can just put 'title' instead of 'title: title'
  addTodo = title => {
    //add .catch to catch any errors from the api
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      //this is JSX
      //cant use "class", have to use "className"
      //passing the state as todos
      //'exact' to a route makes it only show up if it's chosen
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    delTodo={this.delTodo}
                    markComplete={this.markComplete}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
