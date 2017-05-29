/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>Home</h1>
        <div className={s.imgheader}></div>
        <p>Lorem ipsum dolor sit amet, mucius splendide id duo, vitae omnium vulputate cum ex. Ex ius viris facete facilisis, mei amet justo eu, quaeque impedit facilisi ea ius. Et est utroque delectus sapientem, eos id agam fuisset pertinax. Ius ea choro molestie explicari, cum ea magna libris populo. Eros dolorem per ut, in elit fierent vim. Prompta nonumes sententiae in duo. Tempor saperet nominavi est te, id vis laudem accusam omittantur. Per ei timeam convenire consetetur, unum adipisci percipitur has ei. Ut lorem eleifend eum, duis dicta legimus sit et. Vix dico iudico ei. His facilis laboramus ea, stet partiendo in pri. Ad eum elitr saperet vulputate. Id fabellas assueverit eum, omnes meliore intellegam est ne, ad mea eros nostrud. Dico deleniti adipiscing eu mel, ei vel affert gloriatur. Dolor reprimique pro ut, deleniti sapientem ad pri. No usu tamquam labitur molestie, autem nullam ponderum nam ne, ne summo impetus suscipit mel. Has ei delenit definitiones, mea erant audire cu, duo an eripuit probatus dissentiunt. Quo offendit expetendis an, at vim prima movet viderer. Et sea novum graeci maluisset, assentior voluptatum nec ei. Ad saperet dolorum convenire duo, ei mei labore scribentur. Cu consul salutatus patrioque mei, eam te omnis utinam eripuit. Mea id porro postea sensibus, soluta adolescens eu per</p>
        <p>Lorem ipsum dolor sit amet, mucius splendide id duo, vitae omnium vulputate cum ex. Ex ius viris facete facilisis, mei amet justo eu, quaeque impedit facilisi ea ius. Et est utroque delectus sapientem, eos id agam fuisset pertinax. Ius ea choro molestie explicari, cum ea magna libris populo. Eros dolorem per ut, in elit fierent vim. Prompta nonumes sententiae in duo. Tempor saperet nominavi est te, id vis laudem accusam omittantur. Per ei timeam convenire consetetur, unum adipisci percipitur has ei. Ut lorem eleifend eum, duis dicta legimus sit et. Vix dico iudico ei. His facilis laboramus ea, stet partiendo in pri. Ad eum elitr saperet vulputate. Id fabellas assueverit eum, omnes meliore intellegam est ne, ad mea eros nostrud. Dico deleniti adipiscing eu mel, ei vel affert gloriatur. Dolor reprimique pro ut, deleniti sapientem ad pri. No usu tamquam labitur molestie, autem nullam ponderum nam ne, ne summo impetus suscipit mel. Has ei delenit definitiones, mea erant audire cu, duo an eripuit probatus dissentiunt. Quo offendit expetendis an, at vim prima movet viderer. Et sea novum graeci maluisset, assentior voluptatum nec ei. Ad saperet dolorum convenire duo, ei mei labore scribentur. Cu consul salutatus patrioque mei, eam te omnis utinam eripuit. Mea id porro postea sensibus, soluta adolescens eu per</p>
      </Layout>
    );
  }

}

export default HomePage;
