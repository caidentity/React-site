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

import s from './styles.css';
import styles from '../../assets/app.css';
import classnames from 'classnames';

class LogoPage extends React.Component {

  componentDidMount() {
    document.title = "Our Logo";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <div className={styles.container}>
            <h1 className={styles.title+ ' ' + "revealer"} data-emergence="hidden">Our Logo</h1>
            <img className={styles.icon} src={'/img/pageicon/pageicon-logo.png'}></img>
          </div>
        </div>
        <div className={styles.frame}>
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
                <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Lockups</h2>
              </Col>
              <Col xs={12} md={12}>
                <div className={s.lockup+ ' ' + "revealer"} data-emergence="hidden"><img src="/img/assets/logo-1.jpg"></img></div>
              </Col>
              <Col xs={12} md={6}>
                <div className={s.lockup+ ' ' + "revealer"} data-emergence="hidden"><img src="/img/assets/logo-2.jpg"></img></div>
              </Col>
              <Col xs={12} md={6}>
                <div className={s.lockup+ ' ' + "revealer"} data-emergence="hidden"><img src="/img/assets/logo-3.jpg"></img></div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <h5>Horizontal Lockup</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
              </Col>
              <Col xs={12} md={4}>
                <h5>Logo Mark</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
              </Col>
              <Col xs={12} md={4}>
                <h5>Stacked Lockup</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Colors</h2>
                <h4 className={styles.subhead}>Always use the two-color logo whenever possible. The one-color version
                should only be reserved for applications limited by color contrast or printing techniques.</h4>
              </Col>
              <Col xs={12} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Clear space</h2>
                <h4 className={styles.subhead}> Always maintain this minimum clearspace between the logo and other elements to avoid overcrowding.</h4>
              </Col>
              <Col xs={12} md={6}>
                <div className={s.spacing+ ' ' + "revealer"}  data-emergence="hidden"><img src="/img/guide/logo/logospacing-1.jpg"></img></div>
              </Col>
              <Col xs={12} md={6}>
                <div className={s.spacing+ ' ' + "revealer"}  data-emergence="hidden"><img src="/img/guide/logo/logospacing-2.jpg"></img></div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Do's And Don'ts</h2>
              </Col>
            </Row>
            <Row>
            <Col xs={12} md={12}>
              <Link to="/"><ReactButton color='border'size='normal'>Download all logo assets</ReactButton></Link>
            </Col>
            </Row>
          </Grid>
        </div>
        </div>
      </Layout>
    );
  }

}

export default LogoPage;
