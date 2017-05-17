import { REQ_BOOK_VARIABLE,CONFIRM_REQ_BOOK_VARIABLE } from '../constants';

async function setBookState(fetch, id) {
	  // let state = store.getState();
    
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

    // confirm borrower book requests  
    const handleReq = async (id) => {
      let queryStr = 'mutation {updatebook(id:"'+id+'",isBorrowed:"2")}';  
      const resp = await fetch('/graphql', {
        body: JSON.stringify({
        query: queryStr,
        }),
      });
      const { data } = await resp.json();
      if (!data) throw new Error('Failed to load the booklist.');
	  	  
      // request for me query unapproved
      let queryStr3 = '{allbooks(owner:"'+state.user.email+'",isBorrowed:"1"){title,id}}';
      const reqForMyBooks = await getBooks(queryStr3, "Requests for my books");
	  return reqForMyBooks;
    } 
	  
    const reqForMyBooks = await handleReq(id);
	  return reqForMyBooks;
}

export default async function book(state = {}, action) {
  switch (action.type) {
    case CONFIRM_REQ_BOOK_VARIABLE:
	  const reqForMyBooks = await setBookState(fetch, action.payload.id);
      return {
        ...state,
        reqForMyBooks: reqForMyBooks,
      };
    default:
      return state;
  }
}