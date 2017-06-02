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
        <Link className="" to="/">Overview</Link>
        <Link className="" to="/logo">Guidelines</Link>
        <Link className="" to="/assets">Brand Assets</Link>
        <Link className="" to="../en-testing.appspot.com/legal" target="_blank">Legal</Link>
      </nav>
    );
  }

}

export default Navigation;
