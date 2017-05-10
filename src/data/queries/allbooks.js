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

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const allbooks = {
  type: new List(BookItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 1 /* 1 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = Book.find({})
        .then(response => {
			items.push(JSON.stringify(response));
			return items;
			})
        .catch((err) => {
          lastFetchTask = null;
          throw err;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default allbooks;
