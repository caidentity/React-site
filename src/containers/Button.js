import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="content">
        <div className="contentHeader">
          <h2>Buttons</h2>
        </div>
        <p>Use buttons to trigger actions and links. Buttons can contain a combination of a clear label and an icon while links are always text.</p>
        <h4>Button Ordering</h4>
        <p>Buttons are sorted by importance from left to right</p>
      </div>
    );
  }
}

export default Button;
