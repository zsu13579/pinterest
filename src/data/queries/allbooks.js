/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from 'isomorphic-fetch';
import BookItemType from '../types/BookItemType';
import UserType from '../types/UserType';
import { User, Book } from '../../data/models';
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const allbooks = {
  type: BookItemType,
  resolve() {
    // if (lastFetchTask) {
    //   return lastFetchTask;
    // }

    // if ((new Date() - lastFetchTime) > 1000 * 60 * 1 /* 1 mins */) {
      // lastFetchTime = new Date();
      
      lastFetchTask = Book.find()
        .then(response => {
      let resp={};
      let tmp=JSON.parse(JSON.stringify(response));

      resp.owner=tmp.owner;
      resp.borrower=tmp.borrower;
      resp.isBorrowed=tmp.isBorrowed;
      resp.title=tmp.title;
      resp.link=tmp.link;
			items.push(resp);
      console.log(items);
			return {
        owner:tmp.owner,
        borrower:tmp.borrower,
        isBorrowed:tmp.isBorrowed,
        title:tmp.title,
        link:tmp.link,
      };
			})
        .catch((err) => {
          lastFetchTask = null;
          throw err;
        });

   // return {
   //      owner:"tmp.owner",
   //      borrower:"tmp.borrower",
   //      isBorrowedt:true,
   //      title:"tmp.title",
   //      link:"tmp.link",
   //    };

    //   if (items.length) {
    //     return items;
    //   }

    //   return lastFetchTask;
    // // }

    // return items;
  },
};

export default allbooks;
