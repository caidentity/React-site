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

  componentWillMount() {
  	this.fetchPage();
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage() {
    if (this.props.prismicCtx) {
      // We are using the function to get a document by its uid
      return this.props.prismicCtx.api.getSingle('guides', {}, (err, doc) => {
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
    if (this.state.doc) {
    if(!this.state.doc.id) return <h1>Loading</h1>;

  return (
        <div data-wio-id={this.state.doc.id}>
          {/* This is how to get an image into your template */}
          {/* This is how to get text into your template */}
          <h1>{this.state.doc.getText('guides.page_tite')}</h1>
          {/* This is how to get structured text into your template */}
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
  }
}

export default WhatsNewPage;
