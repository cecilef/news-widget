import React, { Component } from 'react';
import './Article.css';

export class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article
    };
  }

  /**
   * Returns formatted date with this format : dd/MM/YYYY
   * @param timestamp
   */
  formatDate(timestamp) {
    if (!timestamp) return 'n/a';
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    return `${date.getDate()}/${month}/${date.getFullYear()}`;
  }

  render() {
    return (
      <li>
        <h3>{this.state.article.title}</h3>
        <p className="article__body">
          <span className="publish-date">{this.formatDate(this.state.article.publishedAt)}</span>
          <div className="source-name"><span className="source-name__inner">{this.state.article.source.name}</span></div>
        </p>
      </li>
    )
  }
}
