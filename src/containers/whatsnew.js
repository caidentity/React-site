import React, { Component } from "react";

class WhatsNew extends Component {
  render() {
    return (
      <div className="content">
        <div className="contentHeader">
          <h2>Whats New</h2>
        </div>
        {/* NEW ENTRY HERE */}
        <h4>May 6th, 2018</h4>
        <p>Refined documentation for the following</p>
        <ul>
          <li>Color</li>
          <li>Iconography</li>
          <li>Spacing</li>
          <li>Typoography</li>
        </ul>
        {/* NEW ENTRY HERE */}
        <h4>May 4th, 2018</h4>
        <p>Migrated all documentation to the new home!</p>
      </div>
    );
  }
}

export default WhatsNew;
