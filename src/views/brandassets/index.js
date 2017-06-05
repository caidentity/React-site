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

function Brandasset(props) {
  return  <div className={styles.brandasset+ ' ' + "revealer"} data-emergence="hidden">
            <img src={props.thumburl}/>
            <div className={styles.overlay}>
              <h5>{props.name}</h5>
              <span>download</span>
            </div>
          </div>;
}

class AssetPage extends React.Component {

  componentDidMount() {
    document.title = "Brand Assets";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <div className={styles.container}>
            <h1 className={styles.title+ ' ' + "revealer"} data-emergence="hidden">Brand Assets</h1>
          </div>
        </div>
        <div className={styles.container}>
          <Grid fluid>
            <Row>
              <Col xs={12} md={12}>
                <p>Thanks for your interest in Evernote. We have a few guidelines
                for using our brand resources—please take a moment to familiarize
                yourself with them. You can download individual assets in each
                section. If you want everything, use the button below to
                download a .zip file:</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
              <h2 className={styles.revealer} data-emergence="hidden">Our logo</h2>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-1.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-2.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-3.jpg" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2 className={styles.revealer} data-emergence="hidden">The office</h2>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-1.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-2.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-3.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-4.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-5.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-6.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-7.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-8.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Redwood city office" thumburl="/img/assets/office-9.jpg" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2 className={styles.revealer} data-emergence="hidden">Products</h2>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="iOS" thumburl="/img/assets/product-1.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="iOS" thumburl="/img/assets/product-2.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Desktop" thumburl="/img/assets/product-3.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="iOS" thumburl="/img/assets/product-4.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="iOS" thumburl="/img/assets/product-5.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Desktop" thumburl="/img/assets/product-6.jpg" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
              <h2 className={styles.revealer} data-emergence="hidden">Executive team</h2>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Chris O'Niel" thumburl="/img/assets/team-1.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Phil Libin" thumburl="/img/assets/team-2.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Michelle Wagner" thumburl="/img/assets/team-3.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Andrew Malcom" thumburl="/img/assets/team-4.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Anirban Kundu" thumburl="/img/assets/team-5.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Nate Fortin" thumburl="/img/assets/team-6.jpg" />
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default AssetPage;
