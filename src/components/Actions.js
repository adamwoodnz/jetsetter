import { uniqueId } from 'lodash';
import AppDispatcher from './AppDispatcher';

export const markAllAsUnpacked = () => {
    AppDispatcher.dispatch({
        type: 'MARK_ALL_AS_UNPACKED'
    });
}

export const changeChecked = (item) => {
    AppDispatcher.dispatch({
        type: 'UPDATE_ITEM',
        item
    });
}

export const removeItem = (item) => {
    AppDispatcher.dispatch({
        type: 'REMOVE_ITEM',
        item
    });
}

export const updateItem = (item) => {
    AppDispatcher.dispatch({
        type: 'UPDATE_ITEM',
        item: { ...item, packed: !item.packed }
    });
}

export const addItem = (name) => {
    AppDispatcher.dispatch({
        type: 'ADD_NEW_ITEM',
        item: { value: name, packed: false, id: uniqueId() }
    });
}