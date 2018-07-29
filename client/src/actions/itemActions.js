import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

//could use a bracket to wrap 'id' like before but not needed because it's the only param, not a list of params
export const deleteItem = id => {
  return {
    type: DELETE_ITEMS,
    payload: id
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEMS,
    payload: item
  };
};