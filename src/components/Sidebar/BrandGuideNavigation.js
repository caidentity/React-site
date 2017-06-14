/**
 * React Site
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="sidebar-nav" ref={node => (this.root = node)}>
        <h5>Guidelines</h5>
        <Link className="" to="/logo">Logo</Link>
        <Link className="" to="/color">Color</Link>
        <Link className="" to="/type">Typeography</Link>
        <Link className="" to="/photo">Photography</Link>
      </nav>
    );
  }

}

export default Navigation;
