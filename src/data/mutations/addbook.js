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

const addbook = {
  type: BookItemType,
  args: {
    _id: { type: StringType },    
    owner: { type: StringType },
    borrower: { type: StringType },
	  isBorrowed: { type: new NonNull(StringType) },
	  title: { type: new NonNull(StringType) },
    link: { type: StringType },
  },
  resolve: function(rootValue, args) {
	let bookVal = Object.assign({}, args);
	const fooBar = async () => {
	  // User.drop();
	  let book = await Book.create(bookVal);
	  done(null, {
		title: bookVal.title,
	  });	
	}
	fooBar().catch(done);
  }
}

export default addbook;
