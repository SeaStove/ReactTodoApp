import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //styling
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  //use = (e) => arrow functions or else you have to use 'bind(this)' on the function call
  // markComplete = (e) => {
  //     console.log(this.props)
  // }

  render() {
    //destructuring
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
          x
        </button>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

//CSS
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
