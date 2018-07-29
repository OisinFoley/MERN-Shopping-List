import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';

//dispatch is where installing thunk comes into play, 
//allows us to make async requests
export const getItems = () => dispatch => {
  // return {
  //   type: GET_ITEMS
  // };

  dispatch(setItemsLoading());
  //the proxy in the package.json ensures we don't need to specify localhost:5000/
  axios
    .get('/api/items')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    );
};

export const addItem = item => dispatch => {

  axios
    .post('/api/items', item)
    .then(res => 
      dispatch({
        type: ADD_ITEMS,
        payload: res.data
      })
    )

  return {
    type: ADD_ITEMS,
    payload: item
  };
};

//could use a bracket to wrap 'id' like before but not needed because it's the only param, not a list of params
export const deleteItem = id => dispatch => {
  // return {
  //   type: DELETE_ITEMS,
  //   payload: id
  // };
  axios
    .delete(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEMS,
        payload: id
      })
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};