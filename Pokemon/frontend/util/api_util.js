import {receiveAllPokemon} from '../actions/pokemon_actions';

const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET', 
    url: 'http://localhost:3000/api/pokemon',
    // success: res => console.log(receiveAllPokemon(res)),
  })
)

const fetchAPokemon = () => (
  $.ajax({
    method: 'GET', 
    url: 'http://localhost:3000/api/pokemon/:id',
    // success: res => console.log(receiveAllPokemon(res)),
  })
)


export {fetchAllPokemon, fetchAPokemon};
