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
import Sidebar from '../../../components/Sidebar/BrandGuideSidebar';
import Link from '../../../components/Link';
import ReactButton from '../../../components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StickyContainer, Sticky } from 'react-sticky';

import s from './styles.css';
import styles from '../../../assets/app.css';
import classnames from 'classnames';

class LogoPage extends React.Component {

  componentDidMount() {
    document.title = "Our Logo";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <h1 className={styles.title+ ' ' + "revealer"} data-emergence="hidden">Our Logo</h1>
        </div>
        <StickyContainer style={{zIndex: 2}}>
          <div className={styles.frame}>
            <Sidebar />
            <section className={styles.content}>
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
                    <div className={s.lockup+ ' ' + "revealer"} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-horizontal-dark.png"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.lockup+ ' ' + "revealer"} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-stack-dark.png"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.lockup+ ' ' + "revealer"} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-mark-dark.png"></img>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <h5 data-emergence="hidden">Horizontal Lockup</h5>
                    <p data-emergence="hidden">Use with left aligned layouts and
                    when the vertical space is constrained. Examples being One-pagers, email, web navigation</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <h5 data-emergence="hidden">Logo Mark</h5>
                    <p data-emergence="hidden">Sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <h5 data-emergence="hidden">Stacked Lockup</h5>
                    <p data-emergence="hidden">Use with centered layouts and when
                    there is ample vertical space. Examples being Invitations, gift cards, covers</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Colors</h2>
                    <h4 className={styles.subhead} data-emergence="hidden">Always use the two-color logo whenever possible. The one-color version
                    should only be reserved for applications limited by color contrast or printing techniques.</h4>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.lockup} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-stack-dark.png"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.lockup+ ' ' + s.darkbg} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-stack-transparent.png"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.lockup} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-mark-dark.png"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.lockup+ ' ' + s.darkbg} data-emergence="hidden">
                      <img src="/img/guide/logo/logo-mark-transparent.png"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <h5 data-emergence="hidden">Use whenever possible</h5>
                    <p data-emergence="hidden">Sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
                  </Col>
                  <Col xs={12} md={6}>
                    <h5 data-emergence="hidden">Use limitely on dark-tone backgrounds</h5>
                    <p data-emergence="hidden">Use with centered layouts and when
                    there is ample vertical space. Examples being Invitations, gift cards, covers</p>
                  </Col>

                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Clear space</h2>
                    <h4 className={styles.subhead} data-emergence="hidden"> Always maintain this minimum clearspace
                    between the logo and other elements to avoid overcrowding.</h4>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.spacing+ ' ' + "revealer"}  data-emergence="hidden">
                      <img src="/img/guide/logo/logospacing-1.jpg"></img>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={s.spacing+ ' ' + "revealer"}  data-emergence="hidden">
                      <img src="/img/guide/logo/logospacing-2.jpg"></img>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Crimes</h2>
                    <h4 className={styles.subhead} data-emergence="hidden">To maintain the integrity of the logo,
                    and to promote the consistency of the brand, please do not misuse it. Some logo crimes are listed below.</h4>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-1.jpg"></img></div>
                    <p data-emergence="hidden">Don’t rotate the logo</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-2.jpg"></img></div>
                    <p data-emergence="hidden"> Do not use a white Elephant icon unless the text is also white.</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-3.jpg"></img></div>
                    <p data-emergence="hidden">Do not add additional elements or attempt to redraw the elephant icon.</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-4.jpg"></img></div>
                    <p data-emergence="hidden">Do not place the logo on patterns or busy backgrounds.</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-5.jpg"></img></div>
                    <p data-emergence="hidden">Do not change the Evernote service lockups.</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-6.jpg"></img></div>
                    <p data-emergence="hidden">Do not change the color-ways.</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-7.jpg"></img></div>
                    <p data-emergence="hidden">Dont use any shade of green for a background</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-8.jpg"></img></div>
                    <p data-emergence="hidden">Do apply a gradient ontop or around the logo</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className={styles.img} data-emergence="hidden"><img src="/img/guide/logo/logocrime-9.jpg"></img></div>
                    <p data-emergence="hidden">Do make a pattern with the logo</p>
                  </Col>
                </Row>
                <Row>
                <Col xs={12} md={12}>
                  <h2 className={styles.sectionheader+ ' ' + "revealer"} data-emergence="hidden">Download assets</h2>
                  <Link to="/"><ReactButton color='border'size='normal'>Download all logo assets</ReactButton></Link>
                </Col>
                </Row>
              </Grid>
            </section>
          </div>
        </StickyContainer>
      </Layout>
    );
  }

}

export default LogoPage;
