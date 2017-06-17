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
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import ReactButton from '../../components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StickyContainer, Sticky } from 'react-sticky';

import s from './styles.css';
import styles from '../../assets/app.css';
import classnames from 'classnames';

class WhatsNewPage extends React.Component {

  componentDidMount() {
    document.title = "Whats New";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <h1 className={styles.title} >Whats New</h1>
        </div>
        <div className={styles.frame}>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <h2>Version Title</h2>
                <p>date</p>
                <p>Content Title</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default WhatsNewPage;
