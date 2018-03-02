import React, { Component } from 'react';
import { Article } from "../article/Article";
import './Articles.css';

export class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
  }

  render() {
    let listOfArticles = [];
    if (this.state.articles) {
      listOfArticles = this.state.articles.map((article, index) =>
        <Article article={article} key={index}/>
      );
    }
    return (
      <div className="new-feed__articles">
        <ul className="articles-list">
        {listOfArticles}
        </ul>
      </div>
    );
  }
}
