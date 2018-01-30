import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UPDATE_ALL_ITEMS } from '../constants';

export default function(state = {}, action) {
  if (action.type === UPDATE_ALL_ITEMS) {
    return action.items;
  }

  if (action.type === ADD_NEW_ITEM) {
    return [ ...state, action.item ];
  }

  if (action.type === REMOVE_ITEM) {
    return state.filter(item => item.id !== action.id);
  }

  if (action.type === TOGGLE_ITEM) {
    return state.map(item => {
      if (item.id === action.id) return { ...item, packed: !item.packed  };
      return item;
    });
  }

  if (action.type === MARK_ALL_AS_UNPACKED) {
    return state.map(item => {
      return { ...item, packed: false  };
    });
  }

  return state;
}
