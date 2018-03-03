import React, { Component } from 'react';
import { Article } from "../article/Article";
import './Articles.css';

export class Articles extends Component {
  
  // TODO use props.page when implementing show more
  
  render() {
    let listOfArticles = [];
    if (this.props.articles) {
      listOfArticles = this.props.articles.map((article, index) => {
        if (article.source.name.includes(this.props.source)) {
          return <Article article={article} key={index}/>
        }
      });
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
