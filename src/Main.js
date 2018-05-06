import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./containers/Home";
import Principles from "./containers/Principles";
import Terminology from "./containers/Terminology";
import Color from "./containers/Color";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <h1 className="navTitle">GDL</h1>
            <div className="navSectionTitle">Overview</div>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/principles">Principles</NavLink></li>
            <li><NavLink to="/terminology">Terminology</NavLink></li>
            <div className="navSectionTitle">Atoms</div>
            <li><NavLink exact to="/color">Color</NavLink></li>
          </ul>
          <div className="rightside">
            <Route exact path="/" component={Home}/>
            <Route path="/principles" component={Principles}/>
            <Route path="/terminology" component={Terminology}/>
            <Route path="/color" component={Color}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
