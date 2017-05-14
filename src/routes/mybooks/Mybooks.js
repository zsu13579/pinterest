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
import s from './Mybooks.css';
import { Alert,Button,Panel } from 'react-bootstrap';
// import 'jquery/dist/jquery';
// import 'bootstrap/dist/js/bootstrap';

class Mybooks extends React.Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
		
			<button className="btn btn-primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
			click
			</button>
			<Panel collapsible expanded={this.state.open}>
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
			Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
			</Panel>
		
          <h1>{this.props.title}</h1>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="title">
                Book's Name: 
              </label>
              <input
                className={s.input}
                id="title"
                type="text"
                name="title"
                autoFocus
              />
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Add
              </button>
            </div>
          </form>
		  <div className={s.bookList}>
			<h1></h1>
			{this.props.books.map(item => (
            <article key={item.link} className={s.newsItem}>
              <h2 className={s.newsTitle}><a href={item.link}>{item.title}</a></h2>
            </article>
			))}
		  </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Mybooks);
