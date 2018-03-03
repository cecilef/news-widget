import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sources: this.props.sources
    };
  }

  render() {
    let menuItems = this.state.sources.map((source, id) => {
      return (
        <MenuItem key={source.id} eventKey={id} onSelect={() => this.props.select(source.name)}>{source.name}</MenuItem>
      );
    });
    return (
      <div className="dropdown">
        <DropdownButton
          bsStyle='info'
          title='Filter by source'
          id={`dropdown-basic-info`}
        >
          {menuItems}
        </DropdownButton>
      </div>
    )
  }
}

Filter.propTypes = {
  select: PropTypes.func
};