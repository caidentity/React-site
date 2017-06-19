import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import qs from 'qs';
import Prismic from 'prismic.io';

import PrismicConfig from '../../prismic-configuration';

const PREVIEW_EXPIRES = 30 * 60 * 1000; // 30 minutes

export default class Preview extends React.Component {

  static propTypes = {
    prismicCtx: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  }

  componentWillMount() {
    const params = qs.parse(window.location.search.slice(1));
    this.props.prismicCtx.api.previewSession(params.token, PrismicConfig.linkResolver, '/')
    .then((url) => {
      Cookies.set(Prismic.previewCookie, params.token, { expires: PREVIEW_EXPIRES });
      window.location.href = url;
    })
    .catch((e) => {
      console.log(`Error during preview : ${e}`);
    });
  }

  render() {
    return <p>Loading previews...</p>;
  }
}
