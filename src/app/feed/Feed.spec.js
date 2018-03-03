import React from 'react';
import {shallow} from 'enzyme';
import {Feed} from "./Feed";

describe('News Feed', () => {

  let feedComponent;

  beforeEach(() => {
    feedComponent = shallow(<Feed />);
  });

  it('should not have data loaded', (done) => {
    expect(feedComponent.state('dataLoaded')).toBe.false;
    expect(feedComponent.state.articles).toBe.empty;
    done();
  });

  it ('should have data loaded', (done) => {
    feedComponent.instance().componentDidMount();
    expect(feedComponent.state.dataLoaded).toBe.true;
    expect(feedComponent.state.articles).not.toBe.empty;
    done();
  });
});
