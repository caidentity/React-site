/**
 * React Site
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PrismicApp from '../../PrismicApp';

import cx from 'classnames';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

import s from './Layout.css';
import styles from '../../assets/app.css';

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
      <PrismicApp />,
      <div className={styles.headbg} ref={node => (this.root = node)}>
        <Navbar />
        <main>
          <div>
            <div {...this.props} className={cx(s.content, this.props.className)} />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Layout;
