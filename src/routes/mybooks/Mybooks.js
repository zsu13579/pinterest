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
import { Alert,Button,Panel,Accordion } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reqForMyBooks, confirmReqForMyBooks } from '../../actions/book';

class Mybooks extends React.Component {
    
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      yourRequestOpen: false,
      RequestForYouOpen: false,
      myReqBooks: this.props.myReqBooks,
      reqForMyBooks: this.props.reqForMyBooks,
      open: false,
    };
  }

  async handleClick(e){
      const id = e.target.id;
      const {reqForMyBooks, myReqBooks} = await this.props.handleReq(id);
      this.setState({reqForMyBooks: reqForMyBooks, myReqBooks: myReqBooks, open: false});
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <br/>
        <Accordion>
          <Panel header={'Your Trade requests('+ this.state.myReqBooks.length +' outstanding)'} bsStyle="info" eventKey="1">
            <div className={s.bookList}>
            {this.state.myReqBooks.map(item => (
              <h4 className={s.newsTitle}><a href={item.link}>{item.title}</a></h4>
            ))}
            </div>
          </Panel>
          <Panel header={'Trade requests for you('+ this.state.reqForMyBooks.length +' unapproved)'} bsStyle="info" eventKey="2" expanded={this.state.open} >
            <div className={s.bookList}>
            {this.state.reqForMyBooks.map(item => (
              <h4 className={s.newsTitle}><a href={item.link}>{item.title}</a>&nbsp;<a><i id={item.id} onClick={this.handleClick.bind(this)} className="fa fa-thumbs-o-up"></i></a></h4>
            ))}
            </div>
          </Panel>
        </Accordion>

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
			{this.props.myAllBooks.map(item => (
            <article className={s.newsItem}>
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

