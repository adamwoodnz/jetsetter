import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const { item: { id, packed, value } } = this.props;
    
    return (
      <article className="Item">
        <label htmlFor={id}>
          <input
            type="checkbox"
            checked={packed}
            onChange={this.handleCheck}
            id={id}
          />
          {value}
        </label>
        <button className="Item-remove" onClick={this.handleRemove}>
          Remove
        </button>
      </article>
    );
  }

  handleCheck = event => {
    this.props.onCheck(this.props.item.id, event.currentTarget.value);
  }

  handleRemove = event => {
    this.props.onRemove(this.props.item.id);
  }
}

export default Item;
