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

class HomePage extends React.Component {

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.hometitle}>
          <div className={styles.container}>
            <h1 className={styles.title}>Evernote Brand Guide</h1>
          </div>
        </div>
        <div className={styles.container}>
          <Grid fluid>
            <Row>
              <Col xs={12} md={4}>
                <div className={styles.img}></div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.img}></div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.img}></div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div className={styles.img}></div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.img}></div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.img}></div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
