/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import BookItemType from '../types/BookItemType';
import { User, Book } from '../../data/models';
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const yourReqCnt = {
  type: StringType,
  args: {
	  owner: {type: StringType},
  },
  resolve(root,{owner}) {
  	return Book.findAll({where: {owner:owner}}).length;
  },
};

export default yourReqCnt;
