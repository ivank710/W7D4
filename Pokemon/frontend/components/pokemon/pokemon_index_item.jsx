import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  return (
    <li><Link to="/pokemon/:pokemonId">Name: {props.pokemon.name} <img src={props.pokemon.image_url} /></Link></li>
  )
}

export default PokemonIndexItem;