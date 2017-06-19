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


function ColorRow(props) {

  var test = {
    backgroundColor: props.bgcolor,
    borderColor: props.bordercolor,
  };

  return  <div className={styles.colorrow}>
            <div className={styles.color} style={test}></div>
              <Row>
                <Col xs={12} sm={12} md={4}><span>Hex</span></Col>
                <Col xs={12} sm={12} md={4}><span>RGB</span></Col>
                <Col xs={12} sm={12} md={4}><span>CMYK</span></Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={4}><p>{props.hex}</p></Col>
                <Col xs={12} sm={12} md={4}><p>{props.rgb}</p></Col>
                <Col xs={12} sm={12} md={4}><p>{props.cmyk}</p></Col>
              </Row>
          </div>

}





class TypePage extends React.Component {

  componentDidMount() {
    document.title = "Color";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <h1 className={styles.title}>Typeography</h1>
        </div>
        <StickyContainer style={{zIndex: 2}}>
          <div className={styles.frame}>
            <Sidebar />
            <section className={styles.content}>
              <Grid fluid>
                <Row>
                  <Col xs={12} md={12}>
                    <p>Our typography is a visual expression of our voice. Our typefaces build a level of visual texture that adds warmth and depth to our words, helping content come alive in a way that is warm and welcoming, reliable, and fresh.</p>
                  </Col>
                </Row>
                <Row>
                <h2 className={styles.sectionheader}>Typefaces</h2>
                <Col xs={12} sm={12} md={12}>
                  <div className={s.typeface}>
                    <h2>Gotham</h2>
                    <span>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwkyz123456789</span>
                  </div>
                  </Col>
                </Row>
                <Row>
                  <div className={s.headline}>
                  <Col xs={12} sm={12} md={12}>
                    <h2 className={styles.sectionheader}>Headlines</h2>
                    <Col xs={12} sm={12} md={12}>
                      <h1><span>h1</span>Gotham Light 42</h1>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <h2><span>h1</span>Gotham Light 42</h2>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <h3><span>h1</span>Gotham Light 42</h3>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <h4><span>h1</span>Gotham Book 42</h4>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <h5><span>h1</span>Gotham Book 42</h5>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <p><span>p</span>Gotham Book 42</p>
                    </Col>
                  </Col>
                  </div>
                </Row>
                <Row>
                  <h2 className={styles.sectionheader}>Type color pallete</h2>
                  <h4 className={styles.subhead} >We mostly use the neutral palette for typography, but will make exceptions here and there - mostly for campaigns and interactive elements like text links. See the color usage guidelines for more information.</h4>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#596062" bordercolor="#596062" hex="#596062" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#AAAFB4" bordercolor="#AAAFB4"  hex="#AAAFB4" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#D6DBE0" bordercolor="#D6DBE0"  hex="#D6DBE0" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
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

export default TypePage;
