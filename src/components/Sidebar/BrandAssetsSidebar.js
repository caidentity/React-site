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
import Navigation from './BrandAssetsNavigation';
import Link from '../Link';
import s from './Sidebar.css';
import { StickyContainer, Sticky } from 'react-sticky';

class BrandAssetsSidebar extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <Sticky topOffset={80}>
      {
        ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
          // console.log({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight });

          return (
            <div style={{ ...style,overflow: 'inital',}}>
              <div className={`sidebar ${s.sidebar}`} ref={node => (this.root = node)}>
                <Navigation />
              </div>
            </div>
          )
        }
      }
    </Sticky>
    );
  }
}

export default BrandAssetsSidebar;
