import React, { Component } from 'react';
import * as Actions from './Actions';

import './NewItem.css';

class NewItem extends Component {
  state = {
    value: '',
  };

  shouldComponentUpdate(newProps, newState) {
    return this.state.value !== newState.value;
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { value } = this.state;

    if (value) {
      Actions.addItem(value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
