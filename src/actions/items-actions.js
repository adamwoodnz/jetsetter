import Api from '../lib/api';
import { ADD_NEW_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UPDATE_ALL_ITEMS } from '../constants';

export const addNewItem = (value) => {
  return (dispatch) => {
    Api.add({ value, packed: false }).then((item) => {
      dispatch({
        type: ADD_NEW_ITEM,
        item
      });
    });
  };
};

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id,
});

export const removeItem = (id) => {
  return (dispatch) => {
    Api.delete(id).then((item) => {
      dispatch(getAllItems());
    })
  }
};

export const markAllAsUnpacked = () => ({
  type: MARK_ALL_AS_UNPACKED,
});

export const getAllItems = () => {  
  return (dispatch) => {
    Api.getAll().then((items) => {      
      dispatch({
        type: UPDATE_ALL_ITEMS,
        items
      })
    }
  )};
};
