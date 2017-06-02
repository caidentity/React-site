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
import Layout from '../../../components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';

import s from './styles.css';
import styles from '../../assets/app.css';
import classnames from 'classnames';

class AssetPage extends React.Component {

  componentDidMount() {
    document.title = "Brand Assets";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <div className={styles.container}>
            <h1 className={styles.title}>Brand Assets</h1>
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
                <h2>Our logo</h2>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/logo-1.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Logo</h5>
                  <span>download</span>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/logo-2.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Logo</h5>
                  <span>download</span>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/logo-3.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Logo</h5>
                  <span>download</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2>The office</h2>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/office-1.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Redwood city office</h5>
                  <span>download</span>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/office-2.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Redwood city office</h5>
                  <span>download</span>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/office-3.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Redwood city office</h5>
                  <span>download</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2>Products</h2>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/product-1.jpg'}/>
                <div className={styles.overlay}>
                  <h5>iPhone</h5>
                  <span>download</span>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/product-2.jpg'}/>
                <div className={styles.overlay}>
                  <h5>iPhone</h5>
                  <span>download</span>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/product-3.jpg'}/>
                <div className={styles.overlay}>
                  <h5>Desktop</h5>
                  <span>download</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2>Executive team</h2>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/team-1.jpg'}/>
                <div className={styles.overlay}><span>download</span></div>
                <h5>Chris ONeil</h5>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/team-2.jpg'}/>
                <div className={styles.overlay}><span>download</span></div>
                <h5>Phil Libin</h5>
              </Col>
              <Col xs={12} md={4} className={styles.brandasset}>
                <img src={'/img/assets/team-3.jpg'}/>
                <div className={styles.overlay}><span>download</span></div>
                <h5>Michelle Wagner</h5>
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default AssetPage;
