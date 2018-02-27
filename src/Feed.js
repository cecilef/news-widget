import React, { Component } from 'react';
import { Articles } from "./Articles";

export class Feed extends Component {

  apiKey = 'b73266a05cc24613a36e7ebb7a01de24';

  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      articles: undefined
    };
  }

  /**
   * Get Articles from NewsApi
   */
  getHeadlineArticles() {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`)
      .then(res => res.json());
  }

  componentDidMount() {
    this.getHeadlineArticles().then(
      result => {
        if (result.status === 'ok') {
          this.setState({
            dataLoaded: true,
            nbOfArticles: result.totalResults,
            articles: result.articles
          });
        }
      },
      error => { return undefined; }
    );
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <div>
          <h2 className="news-feed__header">News</h2>
          <Articles articles={this.state.articles}/>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="news-feed__header">News</h2>
          <p>Loading...</p>
        </div>
      )
    }
  }
}
