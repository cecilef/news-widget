import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export class Filter extends Component {

  render() {
    let menuItems = this.props.sources.map((source, id) => {
      return (
        <MenuItem key={source.id} eventKey={id} onSelect={() => this.props.select(source.name)}>{source.name}</MenuItem>
      );
    });
    menuItems.unshift(
        <MenuItem key='all' eventKey='all-sources' onSelect={() => this.props.select('')}>All</MenuItem>
    );
    return (
      <div className="dropdown">
        <DropdownButton bsStyle='info' title='Filter by source' id='dropdown-basic-info'>
          {menuItems}
        </DropdownButton>
      </div>
    )
  }
}

Filter.propTypes = {
  select: PropTypes.func
};