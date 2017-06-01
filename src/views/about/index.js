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
import Layout from '../../../components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';

import s from './styles.css';
import styles from '../../assets/app.css';
import classnames from 'classnames';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = "Logo Guidelines";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <div className={styles.container}>
            <h1 className={styles.title}>Our Logo</h1>
          </div>
        </div>
        <div className={styles.container}>
          <Grid fluid>
            <Row>
              <Col xs={12} md={12}>
              <p>We are upbeat, resourceful, and friendly. We motivate and demonstrate
              a can-do attitude to show our customers what good things are possible.
              We know that innovating and getting things done is messy, we acknowledge
              that, and then focus on the solutions together.</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className={styles.img}></div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.img}></div>
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.img}></div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
