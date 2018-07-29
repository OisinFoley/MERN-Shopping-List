import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Milk'},
    { id: uuid(), name: 'Steak'},
    { id: uuid(), name: 'Water'}
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEMS:
      return {
        ...state,
        //param comes from itemActions, hence checking of action.payload
        items: state.items.filter(s => s.id !== action.payload)
      };
    case ADD_ITEMS:
    return {
      ...state,
      items: [action.payload, ...state.items]
    };
    default:
      return state;
  }
}