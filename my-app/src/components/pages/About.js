import React from "react";

function About() {
  return (
    //can use React.Fragment since it doesnt show like a div, but you need it for a return in JSX
    <React.Fragment>
      <h1>About</h1>
      <p>This is a todo app made in React.</p>
    </React.Fragment>
  );
}

export default About;
