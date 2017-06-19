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

import PrismicApp from '../../PrismicApp';
import Prismic from 'prismic.io';
import PrismicConfig from '../../prismic-configuration';


import s from './styles.css';
import styles from '../../assets/app.css';
import classnames from 'classnames';

class WhatsNewPage extends React.Component {

  state = {
    doc: null,
    notFound: false,
  };

  componentDidMount() {
    document.title = "Whats New";
  }

  fetchPage(props) {
      if (props.prismicCtx) {
              // We are using the function to get a document by its uid
        return props.prismicCtx.api.getSingle('guidelines', {}, (err, doc) => {
          if (doc) {
                      // We put the retrieved content in the state as a doc variable
            this.setState({ doc });
          } else {
                      // We changed the state to display error not found if no matched doc
            this.setState({ notFound: !doc });
          }
        });
      }
      return null;
    }

  render() {
    const { doc } = this.state;
    return (
    <Layout className={s.content}>
      <div className={styles.pagetitle}>
        <h1 className={styles.title} >Whats New</h1>
      </div>
      <div className={styles.frame}>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div data-wio-id={this.state.doc.id}>
                <h1>{this.state.doc.getText('guidelines.title')}</h1>
              </div>
              <p>date</p>
              <p>Content Title</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </Layout>
  )}
}

export default WhatsNewPage;
