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
import Scrollchor from 'react-scrollchor';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);

    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;

  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="sidebar-nav" ref={node => (this.root = node)}>
        <h5>Assets</h5>
        <Scrollchor to="#logo">Logo</Scrollchor>
        <Scrollchor to="#office">Office</Scrollchor>
        <Scrollchor to="#product">Product</Scrollchor>
        <Scrollchor to="#leadership">Leadership</Scrollchor>
      </nav>
    );
  }

}

export default Navigation;
