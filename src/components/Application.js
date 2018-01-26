import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
import itemsStore from './ItemsStore';
import * as Actions from './Actions';

import './Application.css';

class Application extends Component {
  state = {
    items: itemsStore.getItems(),
  };

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem />
        <CountDown {...this.state} />
        <Items
          title="Unpacked Items"
          items={unpackedItems}
        />
        <Items
          title="Packed Items"
          items={packedItems}
        />
        <button className="button full-width" onClick={Actions.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }

  updateState = () => {
    this.setState({ items: itemsStore.getItems() });
  }

  componentDidMount() {
    itemsStore.on('change', this.updateState);
  }
}

export default Application;
