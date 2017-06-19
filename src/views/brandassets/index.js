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
import Sidebar from '../../components/Sidebar/BrandAssetsSidebar';
import Link from '../../components/Link';
import ReactButton from '../../components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StickyContainer, Sticky } from 'react-sticky';

import s from './styles.css';
import styles from '../../assets/app.css';
import classnames from 'classnames';

function Brandasset(props) {
  return  <div className={styles.brandasset}>
            <img src={props.thumburl}/>
            <div className={styles.overlay}>
              <h5>{props.name}</h5>
              <Link to="/"><span></span></Link>
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
          <h1 className={styles.title+ ' ' + "revealer"}>Brand Assets</h1>
        </div>
        <StickyContainer style={{zIndex: 2}}>
        <div className={styles.frame}>
        <Sidebar />
        <div className={styles.content}>
          <Grid fluid>
            <Row>
              <Col xs={12} md={9}>
                <p>Thanks for your interest in Evernote. We have a few guidelines
                for using our brand resources, please take a moment to familiarize
                yourself with <Link to="/logo">them</Link>. You can download individual assets in each
                section. If you want everything, use this button to download
                all</p>
              </Col>
              <Col xs={12} md={1}>
              </Col>
              <Col xs={12} md={2}>
                <Link to="/"><ReactButton color='border' size='normal'>Download all</ReactButton></Link>
              </Col>
            </Row>
            <Row id="logo">
              <Col xs={12} md={12}>
              <h2 className={styles.sectionheader}>Our logo</h2>
              <h4 className={styles.subhead}>Our logos can only be used as permitted by our Trademark Usage Guidelines.</h4>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-1.jpg" downloadurl="/"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-2.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-3.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-4.jpg"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-5.jpg" />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Logo" thumburl="/img/assets/logo-6.jpg" />
              </Col>
            </Row>
            <Row id="office">
              <Col xs={12} md={12}>
                <h2 className={styles.sectionheader}>The office</h2>
                <h4 className={styles.subhead}>Don’t worry about needing to snap photos of our office. We have done that for you. Feel free to use these.</h4>
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
            <Row id="product">
              <Col xs={12} md={12}>
                <h2 className={styles.sectionheader}>Products</h2>
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
            <Row id="leadership">
              <Col xs={12} md={12}>
              <h2 className={styles.sectionheader}>Leadership team</h2>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Brandasset name="Chris O'Niel" thumburl="/img/assets/team-1.jpg" />
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
        </div>
        </StickyContainer>
      </Layout>
    );
  }

}

export default AssetPage;
