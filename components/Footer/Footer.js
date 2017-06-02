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
import Link from '../Link';
import s from './Footer.css';

function Footer() {
  return (
    <footer className="">
      <div className="mdl-mini-footer__left-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Link to="/privacy">Privacy & Terms</Link></li>
          <li><Link to="/not-found">Not Found</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
