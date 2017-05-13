/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Mybooks from './Mybooks';

const title = 'My Books';

export default {

  path: '/mybooks',

  async action({ fetch,store }) {
	let state = store.getState();
	// if(!state.user.email){
		// return { redirect: '/login' }
	// }
  // console.log(state.user.email) ;
  let queryStr = '{allbooks(owner:"'+state.user.email+'"){title}}';
  let queryStr2 = '{yourReq(owner:"'+state.user.email+'"){title}}';
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: queryStr,
      }),
    });
    const { data } = await resp.json();
    if (!data) throw new Error('Failed to load the news feed.');
	console.log(data.allbooks[0].title);

  const resp2 = await fetch('/graphql', {
      body: JSON.stringify({
        query: queryStr2,
      }),
    });
    const { data:dataYourReq } = await resp2.json();
    if (!data) throw new Error('Failed to load the news feed.');
	
    return {
      title,
      component: <Layout><Mybooks title={title} books={data.allbooks} yourReq={dataYourReq.yourReq} /></Layout>,
    };
  },

};
