import {receiveAllPokemon} from '../actions/pokemon_actions';

export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET', 
    url: 'http://localhost:3000/api/pokemon',
    success: res => console.log(receiveAllPokemon(res)),
  })
)

window.fetchy = fetchAllPokemon;