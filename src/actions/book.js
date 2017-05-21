/* eslint-disable import/prefer-default-export */

import { REQ_BOOK_VARIABLE,CONFIRM_REQ_BOOK_VARIABLE } from '../constants';

export function reqForMyBooks({ books }) {
  return {
    type: REQ_BOOK_VARIABLE,
    payload: {
      books
    },
  };
}

export function confirmReqForMyBooks({ books }) {
  return {
    type: CONFIRM_REQ_BOOK_VARIABLE,
    payload: {
      books
    },
  };
}