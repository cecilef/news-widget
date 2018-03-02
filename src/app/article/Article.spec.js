import React from 'react';
import {shallow} from 'enzyme';
import {Article} from "./Article";

describe('Article', () => {

  let articleComponent;
  beforeEach(() => {
    const article = {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "ABC News",
      "title": "Syrian government bombing of Eastern Ghouta continues, despite Russian pause",
      "description": "Airstrikes and shelling resumed on Tuesday in the rebel-held enclave of Eastern Ghouta in Syria, despite a five-hour humanitarian pause ordered by Russia, Syrian President Bashar al-Assad’s main ally.\nSyrian government warplanes and helicopters struck several…",
      "url": "http://abcnews.go.com/International/syrian-government-bombing-eastern-ghouta-continues-russian-pause/story?id=53387318",
      "urlToImage": "https://s.abcnews.com/images/International/syria-ghouta-gty-ml-180227_16x9_992.jpg",
      "publishedAt": "2018-02-27T17:28:00Z"
    };
    articleComponent = shallow(<Article article={article}/>);
  });

  it('should return formatted date', (done) => {
    const timestamp = '2018-02-27T17:28:00Z';
    let formattedDate = articleComponent.instance().formatDate(timestamp);
    expect(formattedDate === '27/02/2018').toBe.true;
    done();
  });

  it ('should return n/a', (done) => {
    let formattedDate = articleComponent.instance().formatDate(undefined);
    expect(formattedDate === 'n/a').toBe.true;
    done();
  })
});
