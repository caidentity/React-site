import React from 'react';
import 'whatwg-fetch';
import Prismic from 'prismic.io';
import PrismicConfig from './prismic-configuration';
import Layout from './components/Layout';

export default class PrismicApp extends React.Component {

  state = {
    prismicCtx: null,
  };

  componentWillMount() {
    this.buildContext().then((prismicCtx) => {
      this.setState({ prismicCtx });
    }).catch((e) => {
      console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
    });
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
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver,
      toolbar: this.refreshToolbar,
    }));
  }

  render() {
      if(!this.state.prismicCtx) return '';

     const childrenWithProps = React.Children.map(this.props.children,
       (child) => React.cloneElement(child, {
         prismicCtx: this.state.prismicCtx
       })
      );
      return <div>{childrenWithProps}</div>;
  }
}
