import React, { Component } from 'react';
import * as Actions from './Actions';

import './Item.css';

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.onCheck}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.onRemove}>
          Remove
        </button>
      </article>
    );
  }

  onRemove = () => {
    Actions.removeItem(this.props.item);
  }

  onCheck = () => {
    Actions.updateItem(this.props.item);
  }
}

export default Item;
