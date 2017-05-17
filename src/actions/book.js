/* eslint-disable import/prefer-default-export */

import { REQ_BOOK_VARIABLE,CONFIRM_REQ_BOOK_VARIABLE } from '../constants';

export function reqForMyBooks({ id }) {
  return {
    type: REQ_BOOK_VARIABLE,
    payload: {
      id
    },
  };
}
