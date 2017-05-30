/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import styles from '../style/app.css';
import classnames from 'classnames';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={classnames(styles.col, styles.col12)}>
          <h1>Brand</h1>
          <div className={styles.img}></div>
        </div>
        <div className={classnames(styles.col, styles.col3)}>
          <div className={styles.img}></div>
        </div>
        <div className={classnames(styles.col, styles.col3)}>
          <div className={styles.img}></div>
        </div>
        <div className={classnames(styles.col, styles.col3)}>
          <div className={styles.img}></div>
        </div>
        <div className={classnames(styles.col, styles.col12)}>
          <p>We are upbeat, resourceful, and friendly. We motivate and demonstrate
          a can-do attitude to show our customers what good things are possible.
          We know that innovating and getting things done is messy, we acknowledge
          that, and then focus on the solutions together.</p>
          <p>We are not delusional. We know that we make sophisticated, and at
          times complicated tools that take a little time to master. So we dont
          over-promise when it comes to the learning curve. We strive to simplify
          the path and explain the best way forward.</p>
          <p>We make people more productive and less stressed. We cant
          solve every problem a team has, but we empathize and give it our
          best shot.</p>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
