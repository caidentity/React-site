import React, { Component } from "react";

class Terminology extends Component {
  render() {
    return (
      <div className="content">
        <div className="contentHeader">
          <h2>Terminology</h2>
        </div>
        <h2>Atoms, Molecules, Organisms, Ecosystems</h2>
        <h4>Atoms</h4>
        <p>Atoms are the absolute fundamentals of our system. This consists of things like color, type, spacing, ect.</p>
        <p>Examples</p>
        <ul>
          <li>Color</li>
          <li>Typoography</li>
          <li>Spacing</li>
        </ul>
        <h4>Molecules</h4>
        <p>Molecules are combinations of multiple atoms that come together. This consists of things like buttons, input fields, links, ect</p>
        <p>Examples</p>
        <ul>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Tooltips</li>
        </ul>
        <h4>Organisms</h4>
        <p>Organisms are a combination of atoms and or molecules to create a larger piece. This consists of things like note snippets, modals, sidebars, ect</p>
        <p>Examples</p>
        <ul>
          <li>Modals</li>
          <li>Cards</li>
          <li>Sidebar</li>
        </ul>
        <h4>Ecosystems</h4>
        <p>Ecosystems are where atoms, molecules and organisms come together to create a view. This consists of things like sign in page, note editor, ect.</p>
        <p>Examples</p>
        <ul>
          <li>Editor</li>
          <li>Authentication</li>
          <li>Camera</li>
        </ul>
      </div>
    );
  }
}

export default Terminology;
