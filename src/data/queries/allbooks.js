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
// let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const allbooks = {
  type: new List(BookItemType),
  args: {
	  title: {type: StringType},
  },
  resolve(root,{title}) {
    // if (lastFetchTask) {
      // return lastFetchTask;
    // }

    // if ((new Date() - lastFetchTime) > 1000 * 60 * 1 /* 1 mins */) {
		
    // let fooBar = async () => {
	  // // lastFetchTime = new Date();
    // const books = await Book.find({}); 
	// // console.log(books);
	// // items.push(books);
	// items = books;
	// return {title:"aaa"};
	// }
	// fooBar().catch((err) => {
	  // // lastFetchTask = null;
	// throw err;
	// });	
	// const title=`${title}`
	if(title){
		return Book.findAll({where: {title:title}});
	}else{
		return Book.findAll();
	}
      // if (items.length) {
        // return items;
      // }

      // return lastFetchTask;
    // }

    // return {title:"aaa"};
  },
};

export default allbooks;
