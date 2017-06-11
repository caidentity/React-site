/**
 * React Site
 *
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Navbar.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`navbar ${s.header}`}  ref={node => (this.root = node)}>
          <div className={`${s.logocontainer}`}>
            <Link className={`title ${s.logo}`} to="/">  </Link>
          </div>
          <div className={`${s.toggle}`}></div>
          <Navigation />
      </header>
    );
  }

}

export default Header;
