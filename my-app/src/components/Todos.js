import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  //passing in todo as a prop with map
  //when you map through something, it makes a list, lists should have keys
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        delTodo={this.props.delTodo}
        markComplete={this.props.markComplete}
        key={todo.id}
        todo={todo}
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
