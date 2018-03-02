import React, { Component } from 'react';

export class Filter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Source 1</a>
          <a class="dropdown-item" href="#">Source 2</a>
        </div>
      </div>
    )
  }
}