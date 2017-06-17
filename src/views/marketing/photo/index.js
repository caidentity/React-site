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

class PhotoPage extends React.Component {

  componentDidMount() {
    document.title = "Photography";
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <h1 className={styles.title}>Photography</h1>
        </div>
        <StickyContainer style={{zIndex: 2}}>
          <div className={styles.frame}>
            <Sidebar />
            <section className={styles.content}>
              <Grid fluid>
                <Row>
                  <Col xs={12} sm={12} md={12}>
                    <p>Content will go here</p>
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

export default PhotoPage;
