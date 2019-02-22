import * as APIUtil from '../util/api_util';

const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
const RECEIVE_ITEMS = "RECEIVE_ITEMS";

const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon 
})

const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

const receiveAPokemon = (pokemon) => ({
  type: RECEIVE_A_POKEMON,
  pokemon
})

const requestAPokemon = () => (dispatch) => (
  APIUtil.fetchAPokemon()
    .then((pokemon) => dispatch(receiveAPokemon(pokemon)))
)

const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
})

const requestItems = () => (dispatch) => (
  APIUtil.fetchItems()
    .then((items) => dispatch(receiveItems(items)))
)

export {RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON, RECEIVE_ITEMS, receiveAllPokemon, 
  requestAllPokemon, receiveAPokemon, requestAPokemon, receiveItems, requestItems};