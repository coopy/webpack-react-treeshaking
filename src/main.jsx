/* eslint-env browser */

import React, { Component } from "react";
import { render } from "react-dom";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>My Component is Nice</h1>
      </div>
    );
  }
}

render(<MyComponent />, document.getElementById("app"));
