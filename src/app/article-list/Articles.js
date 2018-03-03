import React, { Component } from 'react';
import { Article } from "../article/Article";
import './Articles.css';

export class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
      page: this.props.page,
      source: this.props.source
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      source: nextProps.source
    });
  }

  render() {
    let listOfArticles = [];
    if (this.state.articles) {
      listOfArticles = this.state.articles.map((article, index) => {
        if (article.source.name.includes(this.state.source)) {
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
