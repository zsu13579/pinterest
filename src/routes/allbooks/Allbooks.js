/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Allbooks.css';

class Allbooks extends React.Component {

  constructor(...args) {
	  super(...args);
    this.state = {books: this.props.books};
  }		
	
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      owner: PropTypes.string,
	  borrower: PropTypes.string,
	  title: PropTypes.string.isRequired,
      link: PropTypes.string,
      isBorrowed: PropTypes.string,
    })).isRequired,
  }
  
  handleClick(e){
  	const id = e.target.id;
  	const books = this.props.handleReq(id);
    this.setState({books: books});
  }	
  
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>All Books</h1>
          {this.state.books.map(item => (
            <article className={s.newsItem}>
              <h1 className={s.newsTitle}><a href={item.link}>{item.title}</a><a><i id={item.id} onClick={this.handleClick.bind(this)} className='fa fa-exchange fa-fw'></i></a></h1>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Allbooks);
