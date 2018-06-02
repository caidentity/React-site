import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="content">
        {/* CONTENT HEADER */}
        <div className="contentHeader">
          <h2>Tusk</h2>
          <h4>Global Design Language</h4>
        </div>
        <h4> Misson</h4>
        <p>To capture & unify the small details, principles & and guidelines of our experience in order to create a single source of truth.</p>
        <p>Keep tabs of <NavLink exact to="/whatsnew">whats new</NavLink> to this source of truth</p>
      </div>
    );
  }
}

export default Home;
