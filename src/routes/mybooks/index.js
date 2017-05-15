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
  	if(!state.user.email){
  		return { redirect: '/login' }
  	}
    
    // get books function
    async function getBooks(queryStr,err){
      const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: queryStr,
      }),
      });
      const { data } = await resp.json();
      if (!data) throw new Error('Failed to load the booklist:' + err);
      return data.allbooks;
    } 
  
    // My books query
    let queryStr1 = '{allbooks(owner:"'+state.user.email+'"){title}}';
    const myAllBooks = await getBooks(queryStr1, "My allbooks");
    // My requests query outstanding
    let queryStr2 = '{allbooks(borrower:"'+state.user.email+'",isBorrowed:"1"){title}}';
    const myReqBooks = await getBooks(queryStr2, "My requests books");
    // request for me query unapproved
    let queryStr3 = '{allbooks(owner:"'+state.user.email+'",isBorrowed:"1"){title}}';
    const reqForMyBooks = await getBooks(queryStr3, "Requests for my books");
	
    return {
      title,
      component: <Layout><Mybooks title={title} myAllBooks={myAllBooks} myReqBooks={myReqBooks} reqForMyBooks={reqForMyBooks} /></Layout>,
    };
  },

};
