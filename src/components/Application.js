import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items: defaultState
  };

  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  get packedItems() {
    return this.state.items.filter((item) => item.packed === true);
  }

  get unpackedItems() {
    return this.state.items.filter((item) => item.packed !== true);
  }

  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <CountDown />
        <Items title="Unpacked Items" items={this.unpackedItems} onCheck={this.handleCheck} onRemove={this.handleRemove} />
        <Items title="Packed Items" items={this.packedItems} onCheck={this.handleCheck} onRemove={this.handleRemove} />
        <button className="button full-width" onClick={this.handleUnpackAll}>Mark All As Unpacked</button>
      </div>
    );
  }

  addItem = (item) => {
    this.setState({
      items: [ item, ...this.state.items ]
    })
  }

  handleCheck = (id, checked) => {
    const updatedItems = [ ...this.state.items ];
    const [ item ] = updatedItems.filter((item) => item.id === id);
    item.packed = checked === "on" ? true : false;

    this.setState({ items: updatedItems });
  }

  handleRemove = (id) => {
    const updatedItems = [ ...this.state.items ];
    const filteredItems = updatedItems.filter((item) => item.id !== id);

    this.setState({ items: filteredItems });
  }

  handleUnpackAll = () => {
    const unpackedItems = this.state.items.map((item) => ({ ...item, packed: false }));

    this.setState({ items: unpackedItems });
  }
}

export default Application;
