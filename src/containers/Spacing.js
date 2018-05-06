import React, { Component } from "react";

class Spacing extends Component {
  render() {
    return (
      <div className="content">
        {/* CONTENT HEADER */}
        <div className="contentHeader">
          <h2>Spacing</h2>
          <p>Spacing is a fundamental way we set hierarchy and order to the content at hand.</p>
        </div>
        <h4>Baseline</h4>
        <p>Globally we use a division of 8s "8,16,24,32,ect" with helpful factor of 2s</p>
        <h4>Margins & Gutters</h4>
        <p>Global margin standard is 16px with gutters at 10px</p>
      </div>
    );
  }
}

export default Spacing;
