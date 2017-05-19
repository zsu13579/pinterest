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
import Allbooks from './Allbooks';

export default {

  path: '/allbooks',
  
  async action({ fetch,store }) {
	  
	let state = store.getState();
	const owner = state.user.email;
	// if not login redirect to the login page
	if(!state.user.email){
		return { redirect: '/login' }
	}
	
	// get all the books
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{allbooks{id,title,owner}}',
      }),
    });
    const { data } = await resp.json();
    if (!data) throw new Error('Failed to load the booklist.');
    // const dataNotOwner = await data.filter(x => x.owner != owner);
    const dataNotOwner = data;
    console.log(typeof(data));
	
	// handle borrower book requests	
	const handleReq = async (id) => {
		let queryStr = 'mutation {updatebook(id:"'+id+'",borrower:"'+owner+'",isBorrowed:"1")}';	
		const resp = await fetch('/graphql', {
		  body: JSON.stringify({
			query: queryStr,
		  }),
		});
		const { data } = await resp.json();
		if (!data) throw new Error('Failed to load the booklist.');

		// get all the books
	    const resp2 = await fetch('/graphql', {
	      body: JSON.stringify({
	        query: '{allbooks{id,title,owner}}',
	      }),
	    });
	    const { data2 } = await resp2.json();
	    if (!data2) throw new Error('Failed to load the booklist.');
	    // const dataNotOwner = await data.filter(x => x.owner != owner);
	    const dataNotOwner = data2;

	    return dataNotOwner;
	}
	
    return {
      title: 'All Books',
      component: <Layout><Allbooks books={dataNotOwner.allbooks} handleReq={handleReq} /></Layout>,
    };
  },

};
