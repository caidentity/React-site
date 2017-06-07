/**
 * React Site
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <div>
          <Header />
          <main>
            <div>
              <div {...this.props} className={cx(s.content, this.props.className)} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
