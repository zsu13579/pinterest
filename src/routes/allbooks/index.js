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
import Page from '../../components/Page';
// import { User, Book } from '../../data/models';

export default {

  path: '/allbooks',

  // async action() {
    // const data = await require.ensure([], require => require('./allbooks.md'), 'about');

    // return {
      // title: data.title,
      // chunk: 'allbooks',
      // component: <Layout><Page {...data} /></Layout>,
    // };
  // },
  
  async action({ fetch,store }) {
	let state = store.getState();
	// if(!state.user.email){
		// return { redirect: '/login' }
	// }
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{allbooks{title}}',
      }),
    });
    const { data } = await resp.json();
    if (!data) throw new Error('Failed to load the news feed.');
	console.log(data)
	// Book.find({}).then((res) => {console.log(res.json())});
	const vhtml='<h1>hello graph<h1>';
    return {
      title: 'All Books',
      component: <Layout><Page title='test' html={vhtml} /></Layout>,
    };
  },

};
