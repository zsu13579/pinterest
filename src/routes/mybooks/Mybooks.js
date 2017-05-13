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

class Mybooks extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      yourRequestOpen: false,
      RequestForYouOpen: false,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <br/>
        <Accordion>
          <Panel header="Your trade requests({} outstanding)" bsStyle="info" eventKey="1">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Panel>
          <Panel header={'Trade requests for you('+this.props.yourReq.length+' unapproved)'} bsStyle="info" eventKey="2">
            <div className={s.bookList}>
            {this.props.yourReq.map(item => (
              <h4 className={s.newsTitle}><a href={item.link}>{item.title}</a></h4>
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
