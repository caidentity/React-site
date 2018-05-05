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


function ColorCard(props) {

  var test = {
    backgroundColor: props.bgcolor,
    borderColor: props.bordercolor,
  };

  return  <div className={styles.colorcard}>
            <div className={styles.color} style={test}></div>
            <div className={styles.details}>
              <Row>
                <Col xs={12} sm={12} md={6}><span>Hex</span></Col>
                <Col xs={12} sm={12} md={6}><span>RGB</span></Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6}><p>{props.hex}</p></Col>
                <Col xs={12} sm={12} md={6}><p>{props.rgb}</p></Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6}><span>CMYK</span></Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6}><p>{props.cmyk}</p></Col>
              </Row>
            </div>
          </div>

}


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




class ColorPage extends React.Component {

  componentDidMount() {
    document.title = "Color";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <h1 className={styles.title}>Color</h1>
        </div>
        <StickyContainer style={{zIndex: 2}}>
          <div className={styles.frame}>
            <Sidebar />
            <section className={styles.content}>
              <Grid fluid>
                <Row>
                  <Col xs={12} md={12}>
                    <p>Color is the cornerstone of Evernote design. It distinguishes our brand and helps us to create consistent experiences across marketing and products. We use color in meaningful ways in all expressions of our brand. From showing the colorful complexity of teaming up at a high level all the way down to focused, meaningful colors in product, we use color to pinpoint exactly what people need to see.</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader}>Primary Pallete</h2>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <ColorCard bgcolor="#2DBE60" bordercolor="#2DBE60"  hex="#2DBE60" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <ColorCard bgcolor="#7D8688" bordercolor="#7D8688"  hex="#7D8688" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} md={6}>
                    <p>Our Primary Green is the essence of creation. It represents the birth of growth of ideas into concrete projects.</p>
                    <p>It should be use very carefully, only as an accent on meaningful and/ or very few elements accross our brand.</p>
                  </Col>
                  <Col xs={12} md={6}>
                    <p>Our Primary Gray is the perfect balance between the essence of creation. It represents the birth of growth of ideas into concrete projects.</p>
                    <p>It should be use very carefully, only as an accent on meaningful and/ or very few elements accross our brand.</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader}>Secondary Pallete</h2>
                  </Col>
                  <Col xs={12} md={12}>
                    <p>Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean
                    on these colors more frequently when brand awareness is high, or on our own properties where we control
                    the surrounding environment. When used in conjunction with our primary palette, these colors makes every moment feel on-brand.</p>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <ColorCard bgcolor="#618CFF" bordercolor="#618CFF" hex="#618CFF" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <ColorCard bgcolor="#AA63FF" bordercolor="#AA63FF"  hex="#AA63FF" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <ColorCard bgcolor="#FFE961" bordercolor="#FFE961"  hex="#FFE961" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <ColorCard bgcolor="#FFAF58" bordercolor="#FFAF58"  hex="#FFAF58" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <ColorCard bgcolor="#FF3D69" bordercolor="#FF3D69"  hex="#FF3D69" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader}>Extended Pallete</h2>
                  </Col>
                  <Col xs={12} md={12}>
                    <p>Our primary palette uses bright colors to bring a boldness to our brand, and is used in logical ways throughout product and marketing to guide the eye and highlight the important bits. We pepper warmer, secondary palette colors throughout to soften the experience and to impart confidence and optimism.</p>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <h5>Green Pallete</h5>
                    <ColorRow bgcolor="#2DBE60" bordercolor="#2DBE60" hex="#596062" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#40D273" bordercolor="#40D273"  hex="#767E82" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#E0FDEA" bordercolor="#E0FDEA"  hex="#AAAFB4" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <h5>Grey Pallete</h5>
                    <ColorRow bgcolor="#596062" bordercolor="#596062" hex="#596062" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#767E82" bordercolor="#767E82"  hex="#767E82" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#AAAFB4" bordercolor="#AAAFB4"  hex="#AAAFB4" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#D6DBE0" bordercolor="#D6DBE0"  hex="#D6DBE0" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <ColorRow bgcolor="#ECEFF3" bordercolor="#ECEFF3"  hex="#ECEFF3" rgb="243,322,211" cmyk="100, 60, 0, 0"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <h2 className={styles.sectionheader}>Download color palettes</h2>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <p>Both RGB and CMYK palettes are available for Adobe products (.ase). Also included is a RGB palette for Sketch. Simply install the Sketch Palette plugin to use it.</p>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <Link to="/"><ReactButton color='border' size='normal'>CMYK</ReactButton></Link>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <Link to="/"><ReactButton color='border' size='normal'>RGB</ReactButton></Link>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <Link to="/"><ReactButton color='border' size='normal'>SketchPallete</ReactButton></Link>
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

export default ColorPage;
