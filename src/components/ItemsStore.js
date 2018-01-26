import EventEmitter from 'events';
import AppDispatcher from './AppDispatcher';
import { uniqueId } from 'lodash';

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

let items = [ ...defaultState ];

class ItemsStore extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register(action => {
            let actionFound = true;

            switch (action.type) {
                case 'MARK_ALL_AS_UNPACKED':
                    this.markAllAsUnpacked()
                    break;
                case 'ADD_NEW_ITEM':
                    this.addItem(action.item);
                    break;
                case 'UPDATE_ITEM':
                    this.togglePacked(action.item);
                    break;
                case 'REMOVE_ITEM':
                    this.removeItem(action.item);
                    break;
                default:
                    actionFound = false;
                    console.log('No action exists');
            }

            if (actionFound) {
                this.emit('change');
            }
        });
    }

    getItems = () => items;

    addItem = item => {
        items = [ item, ...items ];
    };
    
    removeItem = item => {
        items = items.filter(other => other.id !== item.id)
    };

    togglePacked = item => {
        const otherItems = items.filter(other => other.id !== item.id);
        items = [item, ...otherItems];
    };

    markAllAsUnpacked = () => {
        items = items.map(item => ({ ...item, packed: false }));
    };
}

export default new ItemsStore();