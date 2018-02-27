import React, { Component } from 'react';

export class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article
    };
  }

  render() {
    return (
      <li>
        <h3>{this.state.article.title}</h3>
        <p className="article__body">
          <span>{this.state.article.publishedAt}</span>
          <span>{this.state.article.source.name}</span>
        </p>
      </li>
    )
  }
}
