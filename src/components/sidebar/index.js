import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "../../containers/Home";
import Principles from "../../containers/Principles";
import Terminology from "../../containers/Terminology";
import Color from "../../containers/Color";
import Typography from "../../containers/Typography";
import Spacing from "../../containers/Spacing";
import Iconography from "../../containers/Iconography";
import Button from "../../containers/Button";
import WhatsNew from "../../containers/whatsnew";

import sidebarlogo from '../../assets/images/logo-med.png';


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <div className="navTitle"><img src={sidebarlogo}  width={40} alt="Logo" /></div>
            <div className="navSectionTitle">Overview</div>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/principles">Principles</NavLink></li>
            <li><NavLink to="/terminology">Terminology</NavLink></li>
            <div className="navSectionTitle">Atoms</div>
            <li><NavLink exact to="/color">Color</NavLink></li>
            <li><NavLink exact to="/typography">Typoography</NavLink></li>
            <li><NavLink exact to="/spacing">Spacing</NavLink></li>
            <li><NavLink exact to="/iconography">Iconography</NavLink></li>
            <div className="navSectionTitle">Molecules</div>
            <li><NavLink exact to="/button">Buttons</NavLink></li>
            <div className="navSectionTitle">Misc</div>
            <li><NavLink exact to="/whatsnew">Whats New</NavLink></li>
          </ul>
          <div className="rightside">
            <Route exact path="/" component={Home}/>
            <Route path="/principles" component={Principles}/>
            <Route path="/terminology" component={Terminology}/>
            <Route path="/color" component={Color}/>
            <Route path="/typography" component={Typography}/>
            <Route path="/spacing" component={Spacing}/>
            <Route path="/iconography" component={Iconography}/>
            <Route path="/button" component={Button}/>
            <Route path="/whatsnew" component={WhatsNew}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
