import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  //want state when you can add things
  //this is component state
  //need to have a state handler for onCHange
  //state is constantly being changed because of that
  state = {
    title: ""
  };

  onSubmit = e => {
    //make sure it doesnt try to do the default file submit
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  //use target.name instead of title to make it agnostic
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
