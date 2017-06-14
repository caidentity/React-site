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
    <div className={s.footerleft}>
      <ul>
        <li><Link to="/">Overview</Link></li>
        <li><Link to="./logo">Brand Guidelines</Link></li>
        <li><Link to="./assets">Brand Assets</Link></li>
        <li><Link to="http://www.evernote.com">Evernote.com</Link></li>
        <li><Link to="http://www.evernote.com/careers" target="_blank">Careers</Link></li>
      </ul>
      <ul className={s.footerbottom}>
        <li>© 2017 Evernote Inc.</li>
        <li>Version 2.2.2.</li>
        <li>Last Updated on April 3rd 2017, 9:46 pm.</li>
        <li><Link to="/whatsnew">Whats new</Link></li>
      </ul>
    </div>
    <div className={s.footerright}>
      <ul>
        <li><Link to=""><img className={s.footericon} src={'/img/follow/facebook.png'}></img></Link></li>
        <li><Link to=""><img className={s.footericon} src={'/img/follow/twitter.png'}></img></Link></li>
        <li><Link to=""><img className={s.footericon} src={'/img/follow/medium.png'}></img></Link></li>
        <li><Link to=""><img className={s.footericon} src={'/img/follow/instagram.png'}></img></Link></li>
      </ul>
    </div>
    </footer>
  );
}

export default Footer;
