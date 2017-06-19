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

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
      if (props.prismicCtx) {
        // We are using the function to get a document by its uid
        return props.prismicCtx.api.getSingle('guides')
        .then((doc) => {
          if(doc) this.setState({doc});
          else this.setState({notFound: true});
        })
        .catch((e) => {
          this.setState({notFound: true});
        });
      }
      return;
    }


  render() {
    if(this.state.notFound) return null; //component NotFound doesn't exist yet <NotFound />;
    if(!this.state.doc) return <h1>Loading</h1>;
    return (
      <div data-wio-id={this.state.doc.id}>
        {/* This is how to get an image into your template */}
        {/* This is how to get text into your template */}
        <h1>{this.state.doc.getText('guides.title')}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.doc.getStructuredText('guides.body').asHtml() }} />
        {/* This is how to get structured text into your template */}
      </div>
    );
  }

}

export default WhatsNewPage;
