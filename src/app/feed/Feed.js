import React, { Component } from 'react';
import { Articles } from '../article-list/Articles';
import './Feed.css';
import { Filter } from '../shared/filter/Filter';

export class Feed extends Component {

  apiKey = 'b73266a05cc24613a36e7ebb7a01de24';

  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      articles: undefined,
      page: 1,
      source: '',
      sources: []
    };
  }

  /**
   * Get Articles from NewsApi
   */
  getHeadlineArticles() {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`)
      .then(res => res.json());
  }

  filterBySource(sourceName) {
    this.setState({
      source: sourceName
    });
  }
  
  /**
   * Parse data to extract array of sources
   * @param articles
   * @returns [{id: string, name: string}] array of sources
   */
  initSource(articles) {
    if (!articles || articles.length === 0) return;
    let sources = [];
    for (let article of articles) {
      let sourceFound = sources.filter(source => {return source.id === article.source.id});
      if (article.source && sourceFound.length === 0) sources.push(article.source);
    }
    return sources;
  }

  componentDidMount() {
    this.getHeadlineArticles().then(
      result => {
        if (result.status === 'ok') {
          this.setState({
            dataLoaded: true,
            nbOfArticles: result.totalResults,
            articles: result.articles,
            sources: this.initSource(result.articles)
          });
        }
      },
      error => { return undefined; }
    );
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <div className="main-content">
          <Filter select={this.filterBySource.bind(this)} sources={this.state.sources}/>
          <h2 className="news-feed__header">News</h2>
          <Articles articles={this.state.articles} page={this.state.page} source={this.state.source}/>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="news-feed__header">News</h2>
          <div>Loading...</div>
        </div>
      )
    }
  }
}
