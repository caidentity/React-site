import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import Prismic from 'prismic.io';
import PrismicToolbar from 'prismic-toolbar';
import PrismicConfig from './prismic-configuration';

export default class PrismicApp extends React.Component {

  static propTypes = {
    children: PropTypes.element,
  };

  state = {
    prismicCtx: null,
  };

  componentDidMount() {
    this.buildContext()
    .then((prismicCtx) => {
      this.setState({ prismicCtx });
    }).catch((e) => {
      console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
    });
  }

  componentDidUpdate() {
    this.state.prismicCtx.toolbar();
  }

  refreshToolbar() {
    const maybeCurrentExperiment = this.api.currentExperiment();
    if (maybeCurrentExperiment) {
      PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
    }
    PrismicToolbar.setup(PrismicConfig.apiEndpoint);
  }

  buildContext() {
    const accessToken = PrismicConfig.accessToken;
    return Prismic.api(PrismicConfig.apiEndpoint).then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver,
      toolbar: this.refreshToolbar,
    }));
  }

  render() {
    if (!this.state.prismicCtx) return null;
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        prismicCtx: this.state.prismicCtx,
      });
    });
    return <div>{childrenWithProps}</div>;
  }
}
