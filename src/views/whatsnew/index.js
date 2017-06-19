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
import s from './styles.css';
import styles from '../../assets/app.css';

class WhatsNewPage extends React.Component {

  static propTypes = {
    prismicCtx: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  }

  state = {
    doc: null,
    notFound: false,
  };

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentDidMount() {
    document.title = 'Whats New';
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (!props.prismicCtx) return;
    // We are using the function to get a document by its uid
    props.prismicCtx.api.getSingle('guides')
    .then((doc) => {
      if (doc) this.setState({ doc });
      else this.setState({ notFound: true });
    })
    .catch(() => {
      this.setState({ notFound: true });
    });
  }


  render() {
    if (this.state.notFound) return null; // component NotFound doesn't exist yet <NotFound />;
    if (!this.state.doc) return <h1>Loading</h1>;
    return (
      <Layout className={s.content}>
        <div className={styles.pagetitle}>
          <h1 className={styles.title}>{this.state.doc.getText('guides.title')}</h1>
        </div>
        <div className={styles.frame}>
          <div data-wio-id={this.state.doc.id}>
            {/* This is how to get an image into your template */}
            {/* This is how to get text into your template */}
            <div dangerouslySetInnerHTML={{ __html: this.state.doc.getStructuredText('guides.body').asHtml() }} />
            {/* This is how to get structured text into your template */}
          </div>
        </div>
      </Layout>
    );
  }

}

export default WhatsNewPage;
