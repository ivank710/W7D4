import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
 
  switch(action.type) {
    case(RECEIVE_ALL_POKEMON): 
      return action.pokemon;
    case(RECEIVE_A_POKEMON):
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;