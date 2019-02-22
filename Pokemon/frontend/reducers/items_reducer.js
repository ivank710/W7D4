import { RECEIVE_ITEMS } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
 
  switch(action.type) {
    case(RECEIVE_ITEMS):
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;